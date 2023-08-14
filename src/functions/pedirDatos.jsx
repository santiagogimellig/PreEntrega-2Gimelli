import { productos } from "../asyncMock";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        const item = productos.find((el) => el.id === id);
        if(item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontro el prodcuto"
            })
        }
    })
}