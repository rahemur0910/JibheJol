const router = require('express').Router();
const orderCtrl = require('../controllers/orderController');
const { auth, requireRole } = require('../middleware/auth');

router.post('/', auth, orderCtrl.createOrder);
router.get('/', auth, orderCtrl.getOrders); // can add role-based filtering later
router.put('/:id/status', auth, orderCtrl.updateStatus);
router.put('/:id/paid', auth, orderCtrl.markPaid);

module.exports = router;
