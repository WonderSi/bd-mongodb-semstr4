const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');
const Supplier = require('../models/Suppliers');

router.get('/', async (req, res) => {
  try {
    console.log("Fetching orders...");
    const list = await Order.find().sort({ order_date: -1 });
    console.log(`Found ${list.length} orders`);
    res.json(list);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(`Fetching order with ID: ${req.params.id}`);
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ error: "Заказ не найден" });
    }

    res.json(order);
  } catch (err) {
    console.error("Error fetching order:", err);
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log(`Updating order with ID: ${req.params.id}`);
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedOrder) {
      return res.status(404).json({ error: "Заказ не найдена" });
    }
    
    res.json(updatedOrder);
  } catch (err) {
    console.error("Error updating order:", err);
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log(`Deleting order with ID: ${req.params.id}`);
    const order = await Order.findByIdAndDelete(req.params.id);
    
    if (!order) {
      return res.status(404).json({ error: "Заказ не найден" });
    }
    
    res.status(200).json({ message: "Заказ успешно удален", deletedId: req.params.id });
  } catch (err) {
    console.error("Error deleting order:", err);
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(`Creating new order: ${req.body.order_number}`);
    
    const supplierId = req.body.supplier_info.supplier_id;
    if (supplierId) {
      const supplier = await Supplier.findById(supplierId);
      if (!supplier) {
        return res.status(400).json({ error: "Указанный поставщик не найден" });
      }
    }
    
    const newOrder = new Order(req.body);
    await newOrder.save();
    
    console.log(`Order created with ID: ${newOrder._id}`);
    res.status(201).json({ 
      message: "Заказ успешно создан", 
      orderId: newOrder._id,
      order: newOrder 
    });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 
