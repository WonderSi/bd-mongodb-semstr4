require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Supplier = require("./models/Suppliers");
const WarehouseCell = require("./models/WarehouseCells");
const Sale = require("./models/Sales");
const Part = require("./models/Parts");
const Order = require("./models/Orders");
const CustomerRequest = require("./models/CustomerRequests");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.get("/api/suppliers", async (req, res) => {
  try {
    console.log("Fetching suppliers...");
    const list = await Supplier.find().sort({ supplier_name: 1 });
    console.log(`Found ${list.length} suppliers`);
    res.json(list);
  } catch (err) {
    console.error("Error fetching suppliers:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/warehouse-cells", async (req, res) => {
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

app.get("/api/sales", async (req, res) => {
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

app.get("/api/parts", async (req, res) => {
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

app.get("/api/orders", async (req, res) => {
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

app.get("/api/customer-requests", async (req, res) => {
  try {
    console.log("Fetching customer requests...");
    const list = await CustomerRequest.find().sort({ request_date: -1 });
    console.log(`Found ${list.length} customer requests`);
    res.json(list);
  } catch (err) {
    console.error("Error fetching customer requests:", err);
    res.status(500).json({ error: err.message });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error", message: err.message });
});

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
