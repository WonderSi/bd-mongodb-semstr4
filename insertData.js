require("dotenv").config();
const mongoose = require("mongoose");

const Order = require("./models/Orders");
const Part = require("./models/Parts");
const Sale = require("./models/Sales");
const Supplier = require("./models/Suppliers");
const WarehouseCell = require("./models/WarehouseCells");
const CustomerRequest = require("./models/CustomerRequests");

const orderData = require("./data/orders");
const partData = require("./data/parts");
const saleData = require("./data/sales");
const supplierData = require("./data/suppliers");
const warehouseCellData = require("./data/warehouse-cells");
const customerRequestData = require("./data/customer-requests");

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected — seeding…");

    await Order.deleteMany({});
    await Order.insertMany(orderData);
    console.log("Orders seeded successfully");

    await Part.deleteMany({});
    await Part.insertMany(partData);
    console.log("Parts seeded successfully");

    await Sale.deleteMany({});
    await Sale.insertMany(saleData);
    console.log("Sales seeded successfully");

    await Supplier.deleteMany({});
    await Supplier.insertMany(supplierData);
    console.log("Suppliers seeded successfully");

    await WarehouseCell.deleteMany({});
    await WarehouseCell.insertMany(warehouseCellData);
    console.log("Warehouse Cells seeded successfully");

    await CustomerRequest.deleteMany({});
    await CustomerRequest.insertMany(customerRequestData);
    console.log("Customer Requests seeded successfully");

    console.log("All collections seeded successfully");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
})();
