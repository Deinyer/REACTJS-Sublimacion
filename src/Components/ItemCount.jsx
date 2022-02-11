import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  let [cantidad, setCantidad] = useState(0);

  const increment = () => {
    if (cantidad <= stock) {
      setCantidad(cantidad + 1);
    }
  };
  const decrement = () => {
    if (cantidad >= initial) {
      setCantidad(cantidad - 1);
    }
  };
  const contador = () => {
    alert("Agrego " + cantidad + " de este  artculo");
  };

  return (
    <>
      <div>
        <p className="cantidad">{cantidad}</p>
        <button className="BotonSigno" onClick={decrement}>
          -
        </button>

        <button className="BotonSigno" onClick={increment}>
          +
        </button>
        <button className="BotonSumaArticulo" onClick={() => contador(onAdd)}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
