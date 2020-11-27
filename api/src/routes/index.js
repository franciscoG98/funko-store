const { Router } = require('express');

// WARNING!!! LEER BIEN ANTES DE TOCAR
// import all routers;
const productRouter = require('./product.js');
const searchRouter = require('./search.js');
const userRouter = require('./user.js');
const orderRouter = require('./orders.js')
const cartRouter = require('./cart.js');
const reviewsRouter = require('./reviews.js');
const authRouter = require ('./auth.js');
const statusRouter = require ('./adminStatus.js');
const emailRouter = require("./email");



// const server = require('./product.js');

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/search', searchRouter);
router.use('/user', userRouter);
router.use('/orders', orderRouter);
router.use('/users', cartRouter); //---> cart.js 
router.use('/product', reviewsRouter);
router.use('/auth', authRouter );
router.use('/status', statusRouter);
router.use('/email', emailRouter);





module.exports = router;
