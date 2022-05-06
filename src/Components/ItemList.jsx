import Item from "./Item";


const Itemlist = ({articulos}) => {
  return (
    <div>
      {articulos.length > 0 ? (
        articulos.map((listProducts, id) => (
          <Item
            key={id}
            id={listProducts.id}
            name={listProducts.name}
            descript={listProducts.descrip}
            disp={listProducts.disp}
            view={listProducts.vista}
            cost={listProducts.cost}
            stock={listProducts.stock}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Itemlist;
