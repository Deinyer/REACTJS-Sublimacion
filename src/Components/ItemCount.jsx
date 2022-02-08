import { useState } from "react";

const ItemCount = () => {
let [ cantidad, setCantidad ] = useState(0);

const increment = () => {
    if (cantidad <= 4) {
    setCantidad(cantidad+1);
}
}
const decrement = () => {
    if (cantidad >= 1) {
    setCantidad(cantidad-1 );
}
}
const agregarArticulo = () => {
    alert("Agrego " + cantidad + " de este  artculo")
}

return (
    <>
    <div>

    <p className="cantidad">{cantidad}</p>
    <button className="BotonSigno" onClick={decrement}>-</button>
    
    <button className="BotonSigno" onClick={increment}>+</button>
    <button className="BotonSumaArticulo" onClick={agregarArticulo}>Agregar al carrito</button>
    
    </div>
    </>
)
}

export default ItemCount;