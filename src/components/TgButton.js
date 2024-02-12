import {Modal, InputGroup, Form, Col, Button} from 'react-bootstrap'
import { useState } from 'react';
import { CartContext } from '../CardContext';
import { useContext } from 'react';
import CartProduct from './CartProduct';
import { MainButton } from '@vkruglikov/react-telegram-web-app';
import { getProductData, setDiscount } from '../products'
import "../App.css"
// import {Summary} from "./Summary"
import axios from 'axios';
import * as qs from 'qs'

function formatCurrency(value) {
    return Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }

const PROMOTIONS = [
    {
      code: "summer",
      discount: "50%"
    },
    {
      code: "autumn",
      discount: "40%"
    },
    {
      code: "winter",
      discount: "30%"
    }
  ];



function TgButton () {

    const cart = useContext(CartContext);
    const productCounts = cart.items.reduce((sum, product)=> sum + product.quantity, 0);
    console.log("prcount", productCounts)
    const summ = cart.getTotalCost();
    console.log("summ", summ)
    const api_url = "https://levqn.pythonanywhere.com"
    const user_id = window.Telegram.WebApp.initDataUnsafe.user.id;
    const username = window.Telegram.WebApp.initDataUnsafe.user.username;
    const name = window.Telegram.WebApp.initDataUnsafe.user.first_name;    


    const [promoCode, setPromoCode] = useState("");
    const [discountPercent, setDiscountPercent] = useState(0);
    
    const discount = (summ * discountPercent) / 100;

    function onEnterPromoCode (event) {
        setPromoCode(event.target.value);
    };
    
    function checkPromoCode () {
        for (var i = 0; i < PROMOTIONS.length; i++) {
          if (promoCode === PROMOTIONS[i].code) {
            setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));
    
            return;
          }
        }
    
        alert("Извините, такого промокода не существует");
    };

    function get_invoice(total, discountPercent, promoCode) {
        let initDataHash = localStorage.getItem('initDataHash')
        let dataCheckString = localStorage.getItem('dataCheckString')
        let PRICES = []
        
        PRICES = cart.items.map((currentProduct) =>
        (
            {"label": `${getProductData(currentProduct.id).name} ${currentProduct.quantity}шт.`, "amount": (((getProductData(currentProduct.id).price * 100 * currentProduct.quantity) - ((getProductData(currentProduct.id).price * 100 * currentProduct.quantity) * discountPercent)/ 100))}
        )
        )

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
                      promoCode: promoCode,
                      items: JSON.stringify(PRICES),
                      initDataHash: initDataHash,
                      dataCheckString: dataCheckString,
                    },
                    paramsSerializer: params => {
                        return qs.stringify(params, {arrayFormat: 'brackets'})
                    }
                  })
                  .then(function (response) {
                    
                    window.Telegram.WebApp.close();
                  });  
                
                }
            });          

    }



    const [show, setShow] = useState(false);
    function handleClose () { setShow(false); }
    const handleShow = () => setShow(true);    
    const total = summ - discount;

    return (
        
        <>
        {show === true && productCounts > 0?
            <>
            <MainButton color="#FF790D" textColor="#232323" showProgress text={`Оформить покупку на ${total}₽`} onClick={() => get_invoice(total, discountPercent, promoCode)}></MainButton>
            </>
        :
        <MainButton color="#FF790D" textColor="#232323" text={`Перейти в корзину (${productCounts})`} onClick={handleShow}></MainButton>
        }
        
        
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Ваша корзина:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    {productCounts > 0 ?
                    <>
                        
                        {cart.items.map((currentProduct, idx)=>
                            <CartProduct key={idx} product={currentProduct} quantity={currentProduct.quantity}></CartProduct>
                        )}
                        
                        <section>
                            <div className='form-group row'>
                                <div className='col-xs-2'>
                                    <label className='promocode'>У вас есть промокод?</label>
                                    <input className="w-50 h-50 d-inline-block" type="text" onChange={onEnterPromoCode} />
                                    <button className='checkBTN btn-sm ms-1' type="button" onClick={checkPromoCode}>Применить</button>
                                </div>
                            </div>
                    
                            <div>
                            <ul>
                                {discount > 0 && (
                                <li>
                                    Скидка: <span>{discount}₽</span>
                                </li>
                                )}

                                <li>
                                Общая сумма: <span>{total}₽</span>
                                </li>
                            </ul>
                            </div>
                        </section>

                    </>
                    :
                    <>
                    <p1>Ваша корзина пуста, вернитесь на главный экран и добавьте товары</p1>
                    </>  
                    }                 
                    
            </Modal.Body>
        </Modal>        

        </>
    )
}

export default TgButton;