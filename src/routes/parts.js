const express = require('express');
const router = express.Router();
const Part = require('../models/Parts');

router.get('/', async (req, res) => {
  try {
    console.log("Fetching parts...");
    const list = await Part.find().sort({ part_name: 1 });
    console.log(`Found ${list.length} parts`);
    res.json(list);
  } catch (err) {
    console.error("Error fetching parts:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(`Fetching part with ID: ${req.params.id}`);
    const part = await Part.findById(req.params.id);

    if (!part) {
      return res.status(404).json({ error: "Запчасть не найдена" });
    }

    res.json(part);
  } catch (err) {
    console.error("Error fetching part:", err);
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log(`Updating part with ID: ${req.params.id}`);
    const updatedPart = await Part.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedPart) {
      return res.status(404).json({ error: "Запчасть не найдена" });
    }
    
    res.json(updatedPart);
  } catch (err) {
    console.error("Error updating part:", err);
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log(`Deleting part with ID: ${req.params.id}`);
    const part = await Part.findByIdAndDelete(req.params.id);
    
    if (!part) {
      return res.status(404).json({ error: "Запчасть не найдена" });
    }
    
    res.status(200).json({ message: "Запчасть успешно удалена", deletedId: req.params.id });
  } catch (err) {
    console.error("Error deleting part:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 
