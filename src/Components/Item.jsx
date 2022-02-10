
const Item = ({name,view,descript}) =>{
return (
  
  <article className="cart">
    <figure className="cartName">
      {<p>{name}</p>}
      <img className="products" src={view} alt={name}/>
      <p>{descript}</p>
    </figure>
  </article>
  
)}

export default Item;
