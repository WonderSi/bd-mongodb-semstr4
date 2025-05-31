const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema({
  phone: { type: String },
  email: { type: String },
  address: { type: String }
}, { _id: false });

const deliveryTermsSchema = new mongoose.Schema({
  min_days: { type: Number },
  max_days: { type: Number },
  delivery_cost: { type: Number }
}, { _id: false });

const supplierSchema = new mongoose.Schema({
  supplier_name: { type: String, required: true },
  supplier_category: { type: String },
  contact_info: contactInfoSchema,
  has_guarantee: { type: Boolean },
  provides_discounts: { type: Boolean },
  has_full_documents: { type: Boolean },
  contract_based: { type: Boolean },
  reliability_rating: { type: Number },
  delivery_terms: deliveryTermsSchema,
  total_orders_count: { type: Number, default: 0 },
  total_orders_amount: { type: Number, default: 0 },
  is_active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Supplier', supplierSchema);
