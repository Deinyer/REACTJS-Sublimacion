import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import listProducts from "../utils/product";
import Itemlist from "./ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting }) => {
  const [articulos, setArticulos] = useState([]);
  const {Productos} = useParams

  useEffect(() => {
    console.log(Productos)
    const customFetch = new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const productsFiltered = Productos ? listProducts.filter(p => p.productos === Productos) : listProducts;
        resolve(productsFiltered);
      }, 3000);
    });
    customFetch
      .then((res) => {
        setArticulos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Productos]);
  console.log(articulos)
  return (
    <div>
      {greeting}
      <hr />
      
      <Itemlist articulos={articulos} />
      <ItemCount  stock={listProducts.stock} initial={1} />
      
    </div>
  );
};

export default ItemListContainer;
