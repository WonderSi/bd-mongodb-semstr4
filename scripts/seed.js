require("dotenv").config();
const mongoose = require("mongoose");

const {
  Order,
  Part,
  Sale,
  Supplier,
  WarehouseCell,
  CustomerRequest,
} = require("../src/models");

const orderData = require("../src/data/orders");
const partData = require("../src/data/parts");
const saleData = require("../src/data/sales");
const supplierData = require("../src/data/suppliers");
const warehouseCellData = require("../src/data/warehouse-cells");
const customerRequestData = require("../src/data/customer-requests");

const seedDatabase = async () => {
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
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
};

seedDatabase();
