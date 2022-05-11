import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import CartContext from '../utils/cart-context';


  function ItemDetail({ item }) {

    const cartcontext = useContext(CartContext);

    function addHandler(quantityToAdd) {
      cartcontext.addProduct({quantity: quantityToAdd, ...item});
    }

    
    return (
            
          <div className="detail">
          <img src={ item?.vista } alt='Loading...' />   
          <div className="cartName"> 
          <p className="detall">{item?.name}</p>
          <hr/>
            <figcaption className="figcap"> 
              <p className="detall">{item?.descrip}</p>
            </figcaption>
          <p className="detall2">{ item?.cost }</p>
          <p className="detall1">{ item?.stocks }</p>
          <hr/> 
          <p className="detall">Hechas de Ceramica</p>     
          <ItemCount initial={0} stock={item?.stock} onAdd={addHandler} />
          <hr/>
          <button onClick={() => console.log(cartcontext.products)} >Imprimir total</button>
                    <button onClick={() => cartcontext.removeProduct(item.id)} >Remover</button>
                    <button onClick={() => cartcontext.clear()} >Clear</button>
                    <button onClick={() => console.log(cartcontext.isInCart(item.id))} >Is in cart</button>
                    <button onClick={() => console.log(cartcontext.getCartQuantity())} >Quantity</button>
                 
                        
  
           </div>       
              
      </div>
    )
  }
  
  export default ItemDetail