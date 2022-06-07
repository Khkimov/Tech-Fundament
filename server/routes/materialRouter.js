const router = require('express').Router();
const materialController = require('../controllers/materialController');
const { checkAdmin } = require('../middleware/adminMiddle');

router.post('/', checkAdmin, materialController.create);
router.get('/', materialController.getAll);

module.exports = router;
