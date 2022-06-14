const router = require('express').Router();
const typeController = require('../controllers/typeController');
const { checkAdmin } = require('../middleware/adminMiddle');

router.post('/', checkAdmin, typeController.create);
router.get('/', typeController.getAll);
// router.delete('/', checkAdmin, typeController.destroy);

module.exports = router;
