import "./ItemListContainer.css";
import { pedirDatos } from "../functions/PedirDatos";
import { useEffect, useState } from "react";
import ItemList  from './ItemList';
import { useParams } from "react-router-dom";

export function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("productos");
    const { categoryId } = useParams();

    useEffect(() => {
        pedirDatos().then((res) => {
            if (categoryId) {
                setProductos(res.filter((prod) => prod.category === categoryId));
                setTitulo(categoryId)
            } else {
                setProductos(res);
                setTitulo("Productos");
            }
        });
    }, [categoryId]);
    return (
        <>
            <ItemList productos={productos} titulo={titulo} />
        </>
    );
};
