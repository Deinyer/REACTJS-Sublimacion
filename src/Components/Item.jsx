
const Item = ({name,view,descript,cost,stock}) =>{
return (
  
  
    <figure className="cartName">
      <p className="detall">{name}</p>
      <img className="products" src={view} alt={name}/>
      <p className="detall1">{stock}</p>
      <p className="detall2">{cost}</p>
       <figcaption className="figcap"> 
        <p className="detall">{descript}</p>
       </figcaption>
    </figure>
  
  
)}

export default Item;
