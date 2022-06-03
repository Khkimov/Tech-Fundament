const router = require('express').Router();
const sizeController = require('../controllers/sizeController');

router.post('/', sizeController.create);
router.get('/', sizeController.getAll);
router.get('/:id', sizeController.getOne);

module.exports = router;
