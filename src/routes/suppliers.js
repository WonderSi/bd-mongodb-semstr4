const express = require('express');
const router = express.Router();
const Supplier = require('../models/Suppliers'); 

router.get('/', async (req, res) => {
  try {
    console.log("Fetching suppliers...");
    const list = await Supplier.find().sort({ name: 1 });
    console.log(`Found ${list.length} suppliers`);
    res.json(list);
  } catch (err) {
    console.error("Error fetching suppliers:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(`Fetching supplier with ID: ${req.params.id}`);
    const supplier = await Supplier.findById(req.params.id);

    if (!supplier) {
      return res.status(404).json({ error: "Поставщик не найден" });
    }

    res.json(supplier);
  } catch (err) {
    console.error("Error fetching supplier:", err);
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log(`Updating supplier with ID: ${req.params.id}`);
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedSupplier) {
      return res.status(404).json({ error: "Поставщик не найден" });
    }
    
    res.json(updatedSupplier);
  } catch (err) {
    console.error("Error updating supplier:", err);
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log(`Deleting supplier with ID: ${req.params.id}`);
    const supplier = await Supplier.findByIdAndDelete(req.params.id);
    
    if (!supplier) {
      return res.status(404).json({ error: "Поставщик не найден" });
    }
    
    res.status(200).json({ message: "Поставщик успешно удален", deletedId: req.params.id });
  } catch (err) {
    console.error("Error deleting supplier:", err);
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newSupplier = new Supplier(req.body);

    const savedSupplier = await newSupplier.save();

    res.status(201).json(savedSupplier);

  } catch (error) {

    console.error("Ошибка на сервере при создании поставщика:", error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: "Ошибка валидации данных", 
        details: error.errors 
      });
    }

    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
});

module.exports = router;
