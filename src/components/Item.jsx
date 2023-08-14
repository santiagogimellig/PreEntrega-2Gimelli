import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <div className="card mb-3">
            <img src={producto.img} className="card-img-top" alt={producto.name} />
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <h6 className="card-text">Precio: ${producto.price}</h6>
                <h6 className="card-text">Categoría: {producto.category}</h6>
                <h6>{producto.description}</h6>
                <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver más</Link>
            </div>
        </div>
    );
}

export default Item;