
const Item = ({name,view,descript,cost,stock}) =>{
return (
  
  
    <figure className="cartName">
      <p className="detall">{name}</p>
      <img className="products" src={view} alt={name}/>
      <figcaption className="figcap"> 
      <p className="detall">{descript}</p>
      </figcaption>
      <p className="detall2">{cost}</p>
      <p className="detall1">{stock}</p>
      
       
    </figure>
  
  
)}

export default Item;
