const router = require('express').Router();
const houseController = require('../controllers/houseController');
const { checkAdmin } = require('../middleware/adminMiddle');

router.post('/', checkAdmin, houseController.create);
router.get('/', houseController.getAll);

module.exports = router;
