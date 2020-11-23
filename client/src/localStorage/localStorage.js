
export const loadState = () => {
    try {
        const serializedData = localStorage.getItem('state')
        if (serializedData === null) {
            return undefined // Si no existe el state en el local storage devolvemos undefined para que cargue el state inicial que hayamos definido
        }
        return (JSON.parse(serializedData)) // Si encontramos con exito nuestro storage lo devolvemos.
        // state.push(JSON.parse(serializedData))
    } catch (error) {
        return undefined // Si ocurre algun error, devuelvo undefined para cargar el state inicial.
    }
}
export const saveState = (state) => {
    // console.log(state) //state es el producto que recibo del click
    try {
        const newArray = [];
        newArray.push(state.data)
        let serializedData = JSON.stringify(newArray)
        localStorage.setItem('state', serializedData)
    } catch (error) {
        console.log(error) // Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.    
    }
}


//una pista de Elena:
// case GET_PRODUCTS_CART:
//           return {
//         ...state,
//         cart: action.payload,
//  case ADD_PRODUCT_TO_CART:
//       // let array = [...state.cart, action.payload];
//           return {
//         ...state,
//         cart: [...state.cart, action.payload]
// Elena Gonzalez10:19 AM
// console.log( {id: 1, quantity: 1, product: productDetails})
//                     cart.length === 0 ? cart[0] = {id: 1, quantity: 1, product: productDetails} : cart[cart.length] = {id: cart[cart.length-1].id + 1, quantity: 1, product: productDetails}
//                     localStorage.setItem("guestCart", JSON.stringify(cart))
//                     alerta("Agregado", "El producto se agregó al carrito correctamente", "4000")