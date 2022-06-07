const router = require('express').Router();
const userRouter = require('./userRouter');
const materialRouter = require('./materialRouter');
const typeRouter = require('./typeRouter');
const sizeRouter = require('./sizeRouter');
const priceRouter = require('./priceRouter');
const houseRouter = require('./houseRouter');

//  /api
router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/material', materialRouter);
router.use('/size', sizeRouter);
router.use('/price', priceRouter);
router.use('/house', houseRouter);

module.exports = router;
