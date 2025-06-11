const express = require('express');
const router = express.Router();

const suppliersRoutes = require('./suppliers');
const warehouseCellsRoutes = require('./warehouse-cells');
const salesRoutes = require('./sales');
const partsRoutes = require('./parts');
const ordersRoutes = require('./orders');
const customerRequestsRoutes = require('./customer-requests');

router.use('/suppliers', suppliersRoutes);
router.use('/warehouse-cells', warehouseCellsRoutes);
router.use('/sales', salesRoutes);
router.use('/parts', partsRoutes);
router.use('/orders', ordersRoutes);
router.use('/customer-requests', customerRequestsRoutes);

module.exports = router; 
