import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';



  function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
      const listProducts = [
        {
          id: 1,
          name: "Tazas",
          disp:"Disponibles:",
          stock: 5,
          cost: "$450",
          descrip: "Para Personalizar",
          vista: require("../imagen/taza.png"),
        },
        {
          id: 2,
          name: "Remeras",
          disp:"Disponibles:",
          stock: 10,
          cost: "$190",
          descrip: "Para Personalizar",
          vista: require("../imagen/remera.png"),
        },
        {
          id: 3,
          name: "Termos",
          disp:"Disponibles:",
          stock: 8,
          cost: "$800",
          descrip: "Para Personalizar",
          vista: require("../imagen/termo.png"),
        },
        {
          id: 4,
          name: "Buzos",
          disp:"Disponibles:",
          stock: 5,
          cost: "$1800",
          descrip: "Para Personalizar",
          vista: require("../imagen/buzo.png"),
        },
        {
          id: 5,
          name: "LLaveros",
          disp:"Disponibles:",
          stock: 15,
          cost: "$300",
          descrip: "Para Personalizar",
          vista: require("../imagen/llavero.png"),
        },
          
        ];
        const item = listProducts.filter(item => item.id === parseInt(id));
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { Id } = useParams ();

    useEffect(() => {
      console.log(Id)
        getItem(Id)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola!');
            });
    }, [Id]);

    return (
        <div >
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer