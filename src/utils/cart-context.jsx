import { createContext, useState } from "react";

const CartContext = createContext({
    products: [],
    addProduct: () => {},
    removeProduct: () => {},
    clear: () => {},
    isInCart: () => {},
    getCartQuantity: () => {}
});

export const CartContextProvider = ({ children }) => {
    const [listProducts, setlistProducts] = useState([]);

    const addProduct = (product) => {
        const repeatedItemIndex = listProducts.findIndex(item => item.id === product.id)
        if (repeatedItemIndex !== -1) {
            setlistProducts(listProducts.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity} : p));
        } else {
            setlistProducts([product, ...listProducts]);
        }
    }

    const removeProduct = (id) => {
        const indexToRemove = listProducts.findIndex(item => item.id === id);
        if (listProducts[indexToRemove].quantity === 1) {
            setlistProducts(listProducts.filter(i => i.id !== id))
        } else {
            setlistProducts(listProducts.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p));
        }
    }

    const clear = () => {
        setlistProducts([]);
    }

    const isInCart = (id) => {
        return listProducts.map(p => p.id).indexOf(id) !== -1;
    }

    const getCartQuantity = () => {
        return listProducts.reduce((total, value) => {
            return total + value.quantity
        }, 0)
    }
  
    return (
        <CartContext.Provider value={{
            products: listProducts,
            addProduct,
            removeProduct,
            clear,
            isInCart,
            getCartQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;