
const ItemDetail = ({name,imagen,description}) =>{
    return (
      
      <article >
        <figure >
          {<p>{name}</p>}
          <img  src={imagen} alt={name}/>
          <p>{description}</p>
        </figure>
      </article>
      
    )}
   

    
    export default ItemDetail;