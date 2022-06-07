const router = require('express').Router();
const sizeController = require('../controllers/sizeController');
const { checkAdmin } = require('../middleware/adminMiddle');

router.post('/', checkAdmin, sizeController.create);
router.get('/', sizeController.getAll);
// router.get('/:id', sizeController.getOne);

module.exports = router;
