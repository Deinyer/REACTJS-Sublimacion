import { Link } from 'react-router-dom';



const Item = ({ id,name,view,descript,cost,stock,disp}) =>{
return (
  
  
    <figure className="cartName">
      
      <p className="detall">{name}</p>
      <hr/>
      <img className="products" src={view} alt={name}/>
      <figcaption className="figcap"> 
      <p className="detall">{descript}</p>
      </figcaption>
      <p className="detall2">{cost}</p>
      <p className="detall1">{disp }{stock}</p>
      
      <Link to={'/Item/'+ id }>
      <button>Ver Detalle</button>
      </Link>
       
    </figure>
  
  
)}

export default Item;
