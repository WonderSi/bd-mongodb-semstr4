const express = require('express');
const router = express.Router();
const Sale = require('../models/Sales');

router.get('/', async (req, res) => {
  try {
    console.log("Fetching sales...");
    const list = await Sale.find().sort({ sale_date: -1 });
    console.log(`Found ${list.length} sales`);
    res.json(list);
  } catch (err) {
    console.error("Error fetching sales:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(`Fetching sale with ID: ${req.params.id}`);
    const sale = await Sale.findById(req.params.id);

    if (!sale) {
      return res.status(404).json({ error: "Продажа не найдена" });
    }

    res.json(sale);
  } catch (err) {
    console.error("Error fetching sale:", err);
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log(`Updating sale with ID: ${req.params.id}`);
    const updatedSale = await Sale.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedSale) {
      return res.status(404).json({ error: "Продажа не найдена" });
    }
    
    res.json(updatedSale);
  } catch (err) {
    console.error("Error updating sale:", err);
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log(`Deleting sale with ID: ${req.params.id}`);
    const sale = await Sale.findByIdAndDelete(req.params.id);
    
    if (!sale) {
      return res.status(404).json({ error: "Продажа не найдена" });
    }
    
    res.status(200).json({ message: "Продажа успешно удалена", deletedId: req.params.id });
  } catch (err) {
    console.error("Error deleting sale:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 
