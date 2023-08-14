import "./ItemListContainer.css";
import { pedirDatos } from "../functions/PedirDatos";
import { useEffect, useState } from "react";
import ItemList  from './ItemList';

export function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
    }, [])
    return (
        <>
            <ItemList productos={productos} />
        </>
    );
};
