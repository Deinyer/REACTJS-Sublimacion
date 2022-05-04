import { useEffect, useState } from "react";
/*import listProducts from "../utils/product";*/
import ItemDetail from "./ItemDetail";




/*const ItemDetailContainer = () => {
    const [detalles, setDetalles] = useState([]);
  
    useEffect(() => {
  
      const customFetch = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(listProducts[4]);
        }, 2000);
      });
      customFetch
        .then((res) => {
          setDetalles(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    console.log(detalles)
    return (
      <>
      <div>

      <ItemDetail detalles={detalles}/>   

      </div>

    </>
    );
  };

  export default ItemDetailContainer;*/

  function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const item = [
          {
            id: 1,
            name: "Tazas",
            stock: "Disponibles: 5",
            cost: "$450",
            descrip: "Para Personalizar",
            vista: require("../imagen/taza.png"),
          }, 
        ];
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});


    useEffect(() => {
        getItem()
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola!');
            });
    }, []);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer