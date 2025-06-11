const express = require('express');
const router = express.Router();
const CustomerRequest = require('../models/CustomerRequests');

// Получение всех запросов клиентов
router.get('/', async (req, res) => {
  try {
    console.log("Fetching customer requests...");
    const request = await CustomerRequest.find().sort({ request_date: -1 });
    console.log(`Found ${request.length} customer requests`);
    res.json(request);
  } catch (err) {
    console.error("Error fetching customer requests:", err);
    res.status(500).json({ error: err.message });
  }
});

// Получение информации о конкретном запросе клиента
router.get('/:id', async (req, res) => {
  try {
    console.log(`Fetching customer request with ID: ${req.params.id}`);
    const request = await CustomerRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ error: "Запрос клиента не найдена" });
    }

    res.json(request);
  } catch (err) {
    console.error("Error fetching customer request:", err);
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log(`Updating customer request with ID: ${req.params.id}`);
    const request = await CustomerRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!request) {
      return res.status(404).json({ error: "Запрос клиента не найдена" });
    }
    
    res.json(request);
  } catch (err) {
    console.error("Error updating customer request:", err);
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log(`Deleting customer request with ID: ${req.params.id}`);
    const request = await CustomerRequest.findByIdAndDelete(req.params.id);
    
    if (!request) {
      return res.status(404).json({ error: "Запрос клиента не найден" });
    }
    
    res.status(200).json({ message: "Запрос клиента успешно удален", deletedId: req.params.id });
  } catch (err) {
    console.error("Error deleting customer request:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 
