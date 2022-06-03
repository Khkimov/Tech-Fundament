const router = require('express').Router();
const userRouter = require('./userRouter');
const materialRouter = require('./materialRouter');
const typeRouter = require('./typeRouter');
const sizeRouter = require('./sizeRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/material', materialRouter);
router.use('/size', sizeRouter);

module.exports = router;
