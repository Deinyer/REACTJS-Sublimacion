import ItemCount from './ItemCount';
/*import listProducts from '../utils/product';*/


/*const ItemDetail = () =>{
  return (
    <>
      <div className="detall">
      <figure className="cartName">
        <p className="detall">{listProducts.name}</p>
        <img className="products" src={require('../imagen/taza.png')} alt="Tazas"/>
        <figcaption className="figcap"> 
        <p className="detall">"Para Personalizar"</p>
        </figcaption>
        <p className="detall2">"$450"</p>
        <p className="detall1">"Disponibles: 5"</p>
        
         
      </figure>
       
      <p className="detalleProducto">
      Tazas Cerámicas:

      Una taza es un excelente regalo, que no solo perdura, sino que es útil. ¿Qué persona no toma mínimo un café por día? Y generalmente cuando lo hacemos es porque nos damos ese rato para relajarnos y disfrutar del momento.
      Por lo que la taza está asociada a un momento de placer. Elegí una taza y hace feliz a alguien. 
      <ItemCount  stock={5} initial={1} className="contDetall"/> 
      </p>

      
      </div>
    
    </>
  )}
  
  export default ItemDetail;*/

  function ItemDetail({ item }) {
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
          <ItemCount initial={0} stock={item?.stock} onAdd={() => {}} />
           </div>       
              
      </div>
    )
  }
  
  export default ItemDetail