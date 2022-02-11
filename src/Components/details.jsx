import ItemDetail from "./ItemDetail";



const detail = ({detalle}) => {
    return (
      <div>
        {detalle.length > 0 ? (
          detalle.map((productDetails, id) => (
            <ItemDetail
              key={id}
              name={productDetails.name}
              descript={productDetails.description}
              view={productDetails.imagen}
            />
          ))
        ) : (
          <p>Loading.....</p>
        )}
      </div>
    );
  };

  export default detail;