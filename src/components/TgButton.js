import {Modal} from 'react-bootstrap'
import { useState } from 'react';
import { CartContext } from '../CardContext';
import { useContext } from 'react';
import CartProduct from './CartProduct';
import { MainButton } from '@vkruglikov/react-telegram-web-app';
import { getProductData } from '../products'
import axios from 'axios';
import * as qs from 'qs'

function TgButton () {

    const cart = useContext(CartContext);
    const productCounts = cart.items.reduce((sum, product)=> sum + product.quantity, 0);
    const api_url = "https://44c6-5-3-187-182.ngrok-free.app"
    const user_id = window.Telegram.WebApp.initDataUnsafe.user.id;
    const username = window.Telegram.WebApp.initDataUnsafe.user.username;
    const name = window.Telegram.WebApp.initDataUnsafe.user.first_name;


    function get_invoice() {
        let initDataHash = localStorage.getItem('initDataHash')
        let dataCheckString = localStorage.getItem('dataCheckString')
        let PRICES = []
        console.log(initDataHash);
        console.log(dataCheckString);
        
        PRICES = cart.items.map((currentProduct) =>
        (
            {"label": `${getProductData(currentProduct.id).name} ${currentProduct.quantity}шт.`, "amount": (getProductData(currentProduct.id).price * 100 * currentProduct.quantity)}
        )
        )

        
        console.log(JSON.stringify(PRICES));
        console.log("-----------------11")    

        axios.get(api_url+'/create_invoice_link', {
            headers: { 'ngrok-skip-browser-warning': '1234'},
            params: {
              description: `Оплата товара`,
              prices: JSON.stringify(PRICES),
              payload: "1234fff_#fdaf",
              provider_data: JSON.stringify(PRICES),
              initDataHash: initDataHash,
              dataCheckString: dataCheckString,
            },
            paramsSerializer: params => {
                return qs.stringify(params, {arrayFormat: 'brackets'})
            }
          })
          .then(function (response) {
            console.log(response.data);
            window.Telegram.WebApp.openInvoice(response.data);
          });    



          window.Telegram.WebApp.onEvent('invoiceClosed', function(object) {
            if (object.status === 'paid') {
    
                axios.get(api_url+'/send_data', {
                    headers: { 'ngrok-skip-browser-warning': '1234'},
                    params: {
                      chat_id: user_id,
                      username: username,
                      name: name,
                      items: JSON.stringify(PRICES),
                      initDataHash: initDataHash,
                      dataCheckString: dataCheckString,
                    },
                    paramsSerializer: params => {
                        return qs.stringify(params, {arrayFormat: 'brackets'})
                    }
                  })
                  .then(function (response) {
                    console.log(response);
                    window.Telegram.WebApp.close();
                  });  
                
                }
            });          

    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);    

    return (
        <>
        {show === true && productCounts > 0?
            <>
            <MainButton text={`Оформить покупку на ${cart.getTotalCost()}$`} onClick={get_invoice}></MainButton>
            </>
        :
        <MainButton text={`Перейти в корзину (${productCounts})`} onClick={handleShow}></MainButton>
        }
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Ваша корзина:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    {productCounts > 0 ?
                    <>
                        {/* <p1></p1> */}
                        {cart.items.map((currentProduct, idx)=>
                            <CartProduct key={idx} product={currentProduct} quantity={currentProduct.quantity}></CartProduct>
                        )}
                        <h1>Общая сумма: {cart.getTotalCost()}$<br></br><br></br></h1>
                        <h6>Если все верно, нажмите на кнопку оформить покупку</h6>
                        {/* <MainButton text={`Оформить покупку на ${cart.getTotalCost()}$`}></MainButton> */}
                    </>
                    :
                    <p1>Ваша корзина пуста, вернитесь на главный экран и добавьте товары</p1>
                    }
                    
            </Modal.Body>
        </Modal>        
        
        </>
    )
}

export default TgButton;