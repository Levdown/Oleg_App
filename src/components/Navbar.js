import {Button, Navbar, Modal} from 'react-bootstrap'
import { useState } from 'react';
import { CartContext } from '../CardContext';
import { useContext } from 'react';
import CartProduct from './CartProduct';
import { MainButton } from '@vkruglikov/react-telegram-web-app';

function NavbarComponent () {

    const cart = useContext(CartContext);
    const productCounts = cart.items.reduce((sum, product)=> sum + product.quantity, 0);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Navbar expand="sm">
            <Navbar.Brand href="/">АВТОЦИФРА</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Button onClick={handleShow}>Cart {productCounts} items</Button>        
            </Navbar.Collapse>

        </Navbar>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shoping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    {productCounts > 0 ?
                    <>
                        <p1>Items in cart:</p1>
                        {cart.items.map((currentProduct, idx)=>
                            <CartProduct key={idx} product={currentProduct} quantity={currentProduct.quantity}></CartProduct>
                        )}
                        <h1>Total price: {cart.getTotalCost()}</h1>
                        <MainButton text={`Оформить покупку на ${cart.getTotalCost()}$`}></MainButton>
                    </>
                    :
                    <p1>no items</p1>
                    }
                    
            </Modal.Body>
        </Modal>
        
        
        </>

    )
}

export default NavbarComponent;