import "./ItemListContainer.css";
import { pedirDatos } from "../functions/PedirDatos";
import { useEffect, useState } from "react";
import ItemList  from './ItemList';
import { useParams } from "react-router-dom";

export function ItemListContainer() {
    // Defino estados para productos y título
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("productos");
    // Obtengo el parámetro de categoría de la URL 
    const { categoryId } = useParams();

    // Efecto que se ejecuta cuando cambia la categoría seleccionada
    useEffect(() => {
        pedirDatos().then((res) => {
            if (categoryId) {
                // Filtro productos por categoría si se proporciona una
                setProductos(res.filter((prod) => prod.category === categoryId));
                setTitulo(categoryId) // Actualizo el título con la categoría
            } else {
                setProductos(res); // Muestro todos los productos si no hay categoría seleccionada
                setTitulo("Productos"); // Dejo el titulo predeterminado
            }
        });
    }, [categoryId]); // Ejecuto este efecto cuando cambie la categoría
    return (
        <>
            {/* Renderizo el componente ItemList pasando los productos y el título */}
            <ItemList productos={productos} titulo={titulo} /> 
        </>
    );
};
