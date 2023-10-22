import Button from 'react-bootstrap/Button'
import { CartContext } from '../CardContext'
import { useContext } from 'react'
import { getProductData } from '../products'
import "../App.css"

function CartProduct(props){
    const cart = useContext(CartContext);
    const product = props.product;
    const quantity = props.quantity;
    const productData = getProductData(product.id);


    return (
        <>
            <h4>{productData.name} x{quantity}</h4>
            <p>{(quantity * productData.price).toFixed(2)}₽</p>
            <button size="sm" className='removeBTN btn-sm mt-2' onClick={()=>cart.deleteFromCart(product.id)}>Убрать из корзины</button>
            <hr></hr>
        </>
    )
}

export default CartProduct;