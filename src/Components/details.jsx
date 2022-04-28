import ItemDetail from "./ItemDetail";



const Detail = ({detalle}) => {
    return (
      <div>
        {detalle.length > 0 ? (
          detalle.map((DetailProducts, id) => (
            <ItemDetail
              key={id}
              name={DetailProducts.name}
              descript={DetailProducts.description}
              view={DetailProducts.imagen}
            />
          ))
        ) : (
          <p>Loading.....</p>
        )}
      </div>
    );
  };

  export default Detail;