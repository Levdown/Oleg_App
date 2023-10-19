import { createContext, useState } from "react";
import { getProductData, setDiscount } from "./products";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    setCartDiscount: () => {},
});

export function CartPovider({children}){

    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id){
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined){
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id);

        if (quantity === 0){   
            setCartProducts([
                ...cartProducts,
                {
                    id: id,
                    quantity: 1,
                }
            ])
        }
        else {
            // product in cart
            setCartProducts(
                cartProducts.map(
                    product=>
                    product.id === id
                    ? {...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }


    }

    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })  
        )
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        console.log("summ in total cost: ", totalCost);
        return totalCost;
    }

    // function setDiscount(discount){

    //     cartProducts.map((cartItem)=>{
    //         console.log("cartItem",cartItem);
    //         const productData = getProductData(cartItem.id);
    //         console.log("product data ",productData);
    //         newPrice = (productData.price) - ((productData.price) * 0.01 * discount)
    //         console.log("newprice",newPrice);
    //         removeOneFromCart(cartItem.id)
    //         addOneToCart()

    //     })
    // }


    // function cardDiscount () {
    //     let newPrice = 0;
    //     cardProducts.map((cartItem)=> {

    //     })
    // }
    
    function setCartDiscount (discount) {
        cartProducts.map((currentProduct) =>
        (
            setDiscount(currentProduct.id, discount)
        )
        )
    }


    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        setCartDiscount,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartPovider;