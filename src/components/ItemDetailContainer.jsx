import { useEffect, useState } from "react"
import { pedirItemPorId } from "../functions/PedirDatos";
import ItemDetail  from './ItemDetail'; 
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    // Defino el estado para el objeto de detalle del item
    const [item, setItem] = useState(null);
    // Obtengo el parámetro del ID del item de la URL 
    const { itemId } = useParams();

    // Efecto que se ejecuta cuando cambia el ID del item
    useEffect(() => {
        // Llamo a la función pedirItemPorId pasando el ID como número
        pedirItemPorId(Number(itemId)) 
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [itemId]); // Ejecuto este efecto cuando cambie el ID del item

    return(
        <div>
            {/* Renderizo el componente ItemDetail si el objeto de detalle existe */}
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer