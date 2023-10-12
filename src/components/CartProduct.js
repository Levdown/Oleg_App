import Button from 'react-bootstrap/Button'
import { CartContext } from '../CardContext'
import { useContext } from 'react'
import { getProductData } from '../products'


function CartProduct(props){
    const cart = useContext(CartContext);
    const product = props.product;
    const quantity = props.quantity;
    const productData = getProductData(product.id);


    return (
        <>
            <h4>{productData.name} x{quantity}</h4>
            <p>${(quantity * productData.price).toFixed(2)}</p>
            <Button size="sm" onClick={()=>cart.deleteFromCart(product.id)}>Убрать из корзины</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;