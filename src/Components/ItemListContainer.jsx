import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import listProducts from "../utils/product";
import Itemlist from "./ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting }) => {
  const [articulos, setArticulos] = useState([]);
  const {ProductosId} = useParams();

  useEffect(() => {
    console.log(ProductosId)
    const customFetch = new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const productsFiltered = ProductosId ? listProducts.filter(p => p.productos === ProductosId) : listProducts;
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
  }, [ProductosId]);
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
