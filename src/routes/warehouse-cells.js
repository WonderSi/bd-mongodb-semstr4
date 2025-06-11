const express = require('express');
const router = express.Router();
const WarehouseCell = require('../models/WarehouseCells');

router.get('/', async (req, res) => {
  try {
    console.log("Fetching warehouse cells...");
    const list = await WarehouseCell.find().sort({ cell_number: 1 });
    console.log(`Found ${list.length} warehouse cells`);
    res.json(list);
  } catch (err) {
    console.error("Error fetching warehouse cells:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(`Fetching warehouse cell with ID: ${req.params.id}`);
    const cell = await WarehouseCell.findById(req.params.id);
    
    if (!cell) {
      return res.status(404).json({ error: "Ячейка склада не найдена" });
    }

    res.json(cell);
  } catch (err) {
    console.error("Error fetching warehouse cell:", err);
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log(`Updating warehouse cell with ID: ${req.params.id}`);
    const cell = await WarehouseCell.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!cell) {
      return res.status(404).json({ error: "Ячейка склада не найдена" });
    }
    
    res.json(cell);
  } catch (err) {
    console.error("Error updating part:", err);
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log(`Deleting warehouse cell with ID: ${req.params.id}`);
    const cell = await WarehouseCell.findByIdAndDelete(req.params.id);
    
    if (!cell) {
      return res.status(404).json({ error: "Ячейка склада не найдена" });
    }
    
    res.status(200).json({ message: "Ячейка склада успешно удалена", deletedId: req.params.id });
  } catch (err) {
    console.error("Error deleting warehouse cell:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 
