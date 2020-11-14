const server = require('express').Router();
const { User, Order, Orderline } = require('../db.js');
//const  = require('../models/OrderLine.js');

//GET a carrito

server.get('/:idUser/cart', (req, res)=>{
    const {idUser} = req.params
    return Order.findOne({
        where : {
            userId: idUser,
            state: 'cart',
        }
    }).then((orderFound) => {
        idOrder = orderFound.id; 
        return Orderline.findAll({
        where:{
            orderId: idOrder,
            }
        })
    })
    .then((e)=> res.json(e))
    .catch(err=> res.json(err))
    })

//POST a carrito

server.post('/:idUser/cart', (req, res) =>{
   const {idUser} = req.params;
   const  orderlines  = req.body; //esto seria el arrMap[orderlines] 
   const { productId, price, quantity } = orderlines;	
   return Order.findOrCreate({
        where:{
            userId: idUser,
            state: 'cart',    
            }
    }).then((orderCreated) => {
        idOrd = orderCreated[0].id
        return Orderline.findOrCreate({
            where:{                
                orderId: idOrd,           //1          //1
                productId: orderlines.productId,     //1          //1
                quantity: orderlines.quantity,    //2          //3 
                price: orderlines.price,              //10         //20
                }
            })
    }).then((lineCreated)=> {
       return lineCreated[0].update({
            productId: orderlines.productId,
            quantity: orderlines.quantity,
            price: orderlines.price,
        })
        }).then((r)=> res.json(r))
        .catch(err=> res.json(err))
}) 

server.put('/:idUser/cart', (req, res) =>{
    const {idUser} = req.params;
    //const  orderlines  = req.body; //esto seria el arrMap[orderlines] 
    const { productId, price, quantity } = req.body;	
    return Order.findOne({
         where:{
             userId: idUser,
             state: 'cart',    
             }
     }).then((orderFound) => {
         idO = orderFound.id
         return Orderline.findOne({
             where:{                
                 orderId: idO,         
                 productId: productId,    
                 }
             })
     }).then((lineFound)=> {
          console.log(lineFound)
        lineFound.update({
             productId: productId,
             quantity: quantity,
             price: price
         })
         }).then((r)=> res.json("OK"))
         .catch(err=> res.json(err))
 })
   

module.exports = server

/* 
FRONT
agregar a tabla de orderlines cada linea de order. 
cómo me traigo eso del front y como lo agrego?
array de lineas [{},{},{}]
*/
 /* orderlines.forEach(element => {
        return OrderLine.create({
            productId: element.productId,
            quantity: element.quantity,
            price: element.price,
            orderId: order.id
        })}
    ); */
	//const { y, price, productId, } = req.body.orderlines;// array de objetos [{cuantos batman},{cuantos sperman},{}] req.body[i]
	
	/* if (!idUser){
		res.status(400).json({msj: "You have to be a logged user"})}else {; //esto va alfront*/
