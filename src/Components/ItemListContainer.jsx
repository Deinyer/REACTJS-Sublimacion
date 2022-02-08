import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
    <div>
        {greeting}
        <hr />
        <ItemCount />

    </div>
      
    );
  };

  export default ItemListContainer;
  