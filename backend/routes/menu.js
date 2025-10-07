const router = require('express').Router();
const menuCtrl = require('../controllers/menuController');
const { auth, requireRole } = require('../middleware/auth');

router.get('/', menuCtrl.getAll);
router.post('/', auth, requireRole('admin'), menuCtrl.createItem);
router.put('/:id', auth, requireRole('admin'), menuCtrl.updateItem);
router.delete('/:id', auth, requireRole('admin'), menuCtrl.deleteItem);

module.exports = router;
