const Item = ({ producto }) => {
    return (
        <div className="card mb-3">
            <img src={producto.img} className="card-img-top" alt={producto.name} />
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <h6 className="card-text">Precio: ${producto.price}</h6>
                <h6 className="card-text">Categoría: {producto.category}</h6>
                <h6>{producto.description}</h6>
                <a href="#" class="btn btn-primary">Ver más</a>
                {/* <a className="ver-mas" >Ver mas</a> */}
            </div>
        </div>
    );
}

export default Item;

{/* <img src={producto.img} />
            <div>
                <h4>{producto.name}</h4>
                <p>Precio: ${producto.price}</p>
                <p>Categoria: {producto.category}</p>
                <p>{producto.description}</p>
                <a href="#" class="btn btn-primary">Ver más</a>
                <a className="ver-mas" >Ver mas</a> */}