// const { userId } = useParams();
//import React from 'react'
const  {useSelector} = require("react-redux");

 //traemos el array con los productos repetidos
 //creamos un nuevo arr con la cantidad sumada de prod repetidos (un obj por producto)

  //estos arrays y el for los uso para que se agrupen los funkos y no se repitan en la orden
  /* let arrMap = [];// orden entera
  let idArr = [];//junta los id para ver si los tiene  */

  // eslint-disable-next-line react-hooks/rules-of-hooks
   
  
  export const orderlines = function (array){
    var guestOrder = []
    var idArr = []
     for (let i = 0; i < array.length; i++) {
       
      if (idArr.includes(array[i].id)) {
        
        let idProd = array[i].id;//guarda id del producto para buscarla en la orden
        let orderLine = idArr.indexOf(idProd); //busca donde esta en la orden para modificar la OL
        guestOrder[orderLine].quantity += 1;
               
      } else {
        idArr.push(array[i].id);
        
        let pushOrderLine = {
          id: array[i].id,
          name: array[i].name,
          imagen: array[i].imagen,
          price: array[i].price,
          quantity: 1
        }
          
        
        guestOrder.push(pushOrderLine);
      }
    }return guestOrder
  }
  
 export const decrease =  ( array, idProd) => {
   console.log("entroooooo");
   for (let i = 0; i < array.length; i++) {
     if (array[i].id === idProd){
       array.splice(i, 1)
       
      return array
     }
     
   }
   
 }

 
  
  
  