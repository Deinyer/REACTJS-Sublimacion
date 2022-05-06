import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import listProducts from "../utils/product";
import Itemlist from "./ItemList";



const ItemListContainer = ({ greeting }) => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {

    const customFetch = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listProducts);
      }, 3000);
    });
    customFetch
      .then((res) => {
        setArticulos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
