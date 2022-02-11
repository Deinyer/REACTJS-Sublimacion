import { useEffect, useState } from "react";
import detailProducts from "../utils/productDetails";


const ItemDetailContainer = () => {
    const [articulos, setArticulos] = useState([]);
  
    useEffect(() => {
  
      const customFetch = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(detailProducts);
        }, 2000);
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
          <p>hola</p>
    
      </div>
    );
  };

  export default ItemDetailContainer;