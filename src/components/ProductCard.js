import {Card, Button, Col, FormLabel, Form, Modal} from 'react-bootstrap'
import { CartContext } from '../CardContext';
import { useContext } from 'react';
import Select, {OnChangeValue} from 'react-select'
import { useState } from 'react';
import "../App.css"
import { MainButton } from '@vkruglikov/react-telegram-web-app';


function ProductCard(props){
    const product = props.product;

    const cart = useContext(CartContext);
    
    console.log(cart.items);

    const productQuantity = cart.getProductQuantity(product.id)

    const styles = {
        cardImage: {
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'height': '131px',
            'object-fit': 'cover'
        },
        fa: {
            'font-size' : '35px !important',
        }
      }

    // const [selectedValue, setSelectedValue] = useState();
  

    return (
        <Card className='h-100'>
            <Card.Body className='d-flex flex-column'>
                

                {/* <Button onClick={()=>{{navigator.clipboard.writeText(product.name)}; window.Telegram.WebApp.openLink("https://t.me/Wh1te_Boy");}}>Консультация</Button> */}
                
                <p className='CartTitle'>{product.name}</p>
                {product.space ?
                <>
                    <span style={{display: 'none'}}>{product.space}</span>
                </>
                :
                <>
                </>}
                <Card.Img variant="top" src={product.photo} style={styles.cardImage} />
                {/* <Card.Img variant="top" src={product.photo} className='card-img-top' /> */}
                {/* <p className='CartDescription'>{product.description}</p> */}

                {product.value ?
                <>
                    
                    <Select
                        defaultValue={product.value[0]}
                        options={product.value.map((i) => ({value: i, label: i}))}
                    />

                    <Card.Text className='CartPrice'>Цена: {product.price[product.value[0]]}₽</Card.Text>
                </>
                :
                <>
                    <Card.Text className='CartPrice'>Цена: {product.price}₽</Card.Text>
                </>
                }

                
                
                {productQuantity > 0 ?
                <>
                    <Form as={Col} className='mt-auto'>
                        {/* <FormLabel column='true' sm='6'>В корзине: {productQuantity}</FormLabel> */}
                        {/* <Col sm="6" className='col-sm mt-auto'> */}
                            {/* <i sm='6' className='mx-2 mt-auto fa fa-plus-circle' onClick={()=>cart.addOneToCart(product.id)}></i> */}
                            {/* <i sm='6' className='mx-2 mt-auto fa fa-minus-circle' onClick={()=>cart.removeOneFromCart(product.id)}></i> */}
                            <i className='fa fa-minus-circle' style={styles.fa} onClick={()=>cart.removeOneFromCart(product.id)}></i>
                            <FormLabel className="p-3 FormLabel" column='true' sm='6'>{productQuantity}</FormLabel>
                            <i className='fa fa-plus-circle' style={styles.fa} onClick={()=>cart.addOneToCart(product.id)}></i>
                        {/* </Col> */}
                    </Form>
                </>
                :
                <>
                <button className='mt-auto addBtn' onClick={()=>cart.addOneToCart(product.id)}>Добавить</button>
                </>
                }
                <a href="https://t.me/hi_ovsf">
                <button className='consaltBTN btn-sm mt-2' variant='primary'>Консультация</button>
                {/* <button className='addBtn btn-sm mt-2' variant='primary' >Консультация</button> */}
                </a>
            </Card.Body>
        </Card>
    )

}

export default ProductCard;