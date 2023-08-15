import { useEffect, useState } from "react"
import { pedirItemPorId } from "../functions/PedirDatos";
import ItemDetail  from './ItemDetail'; 
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        pedirItemPorId(Number(itemId)) 
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [itemId]);

    return(
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer