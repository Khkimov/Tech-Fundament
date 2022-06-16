const router = require('express').Router();
const priceController = require('../controllers/priceController');
const { checkAdmin } = require('../middleware/adminMiddle');

router.post('/', checkAdmin, priceController.create);
router.get('/', priceController.getAll);
router.put('/', checkAdmin, priceController.update);

module.exports = router;
