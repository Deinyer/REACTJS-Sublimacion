import Item from "./Item";


const Itemlist = ({articulos}) => {
  return (
    <div>
      {articulos.length > 0 ? (
        articulos.map((listProducts, id) => (
          <Item
            key={id}
            name={listProducts.name}
            descript={listProducts.descrip}
            view={listProducts.vista}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Itemlist;
