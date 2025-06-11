const Supplier = require('../models/Suppliers');

exports.getAllSuppliers = async () => {
  return await Supplier.find().sort({ supplier_name: 1 });
};

exports.getSupplierById = async (id) => {
  return await Supplier.findById(id);
};

exports.updateSupplier = async (id, supplierData) => {
  return await Supplier.findByIdAndUpdate(id, supplierData, { 
    new: true, 
    runValidators: true 
  });
};

exports.deleteSupplier = async (id) => {
  return await Supplier.findByIdAndDelete(id);
}; 
