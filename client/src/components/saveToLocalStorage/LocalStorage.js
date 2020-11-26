
export const loadState = () => {
    try {
        const serializedCarrito = localStorage.getItem("carritoGuest");
        const serializedUser = localStorage.getItem("user");
        if (serializedCarrito === null && serializedUser === null) {
            return undefined; // Si no existe el state en el local storage devolvemos undefined para que cargue el state inicial que hayamos definido
        }
        if (serializedCarrito) {
            return JSON.parse(serializedCarrito); // Si encontramos con exito nuestro storage lo devolvemos.
        }
    } catch (error) {
        return undefined; // Si ocurre algun error, devuelvo undefined para cargar el state inicial.
    }
};
export const saveState = (prod, user) => {
    console.log(user)
    try {
        let serializedCarrito = JSON.stringify(prod);
        // let serializedUser = JSON.stringify(user);
        localStorage.setItem("carritoGuest", serializedCarrito);
        // localStorage.setItem("user", serializedUser);
    } catch (error) {
        console.log(error)// Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.
    }
};