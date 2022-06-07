const router = require('express').Router();
const priceController = require('../controllers/priceController');
const { checkAdmin } = require('../middleware/adminMiddle');

router.post('/', checkAdmin, priceController.create);
router.get('/', priceController.getAll);

module.exports = router;
