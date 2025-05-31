require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/Article");
const Supplier = require("./models/Supplier");
const WarehouseCell = require("./models/WarehouseCell");
const Sale = require("./models/Sale");
const Part = require("./models/Part");
const Order = require("./models/Order");
const CustomerRequest = require("./models/CustomerRequest");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/api/articles", async (_, res) => {
  const list = await Article.find().sort({ postedAt: -1 });
  res.json(list);
});

app.get("/api/suppliers", async (_, res) => {
  try {
    const list = await Supplier.find().sort({ company_name: 1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/warehouse-cells", async (_, res) => {
  try {
    const list = await WarehouseCell.find().sort({ cell_number: 1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/sales", async (_, res) => {
  try {
    const list = await Sale.find().sort({ sale_date: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/parts", async (_, res) => {
  try {
    const list = await Part.find().sort({ part_name: 1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/orders", async (_, res) => {
  try {
    const list = await Order.find().sort({ order_date: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/customer-requests", async (_, res) => {
  try {
    const list = await CustomerRequest.find().sort({ request_date: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));