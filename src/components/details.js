

export const Details = {
    basket: [],
    user: null,
  };




function details(props){
    return(
      <div className="details">
        <h1>{"ver detalles"}</h1>
        <div className="componentes">
          <div className="componente">
            <h2>{"Hijo 1"}</h2>
            <p>{"Contador"}</p>
            <p>{"1"}</p>
          </div>
          <div className="componente">
            <h2>{"Hijo 2"}</h2>
            <p>{"Contador"}</p>
            <p>{"1"}</p>
          </div>
        </div>
      </div>
    );
  }

  export default Details;
