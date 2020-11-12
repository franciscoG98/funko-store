const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const searchRouter = require('./search.js');
const userRouter = require('./user.js');
const orderRouter = require('./orders.js')

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/search', searchRouter);
router.use('/user', userRouter);
router.use('/orders', orderRouter);
module.exports = router;
