const router = require('express').Router();
const materialController = require('../controllers/materialController');

router.post('/', materialController.create);
router.get('/', materialController.getAll);

module.exports = router;
