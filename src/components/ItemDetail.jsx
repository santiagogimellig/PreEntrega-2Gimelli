import React from 'react';

const ItemDetail = ({ item }) => {
    return (
        <main className="py-5">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-3">
                <div className="card">
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text categoria">Categoría: {item.category}</p>
                    <p className="card-text">${item.price}</p>
                    <p className="card-text">{item.description}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </main>
    );
};

export default ItemDetail;

