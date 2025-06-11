const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerInfoSchema = new Schema({
  customer_id: { type: Schema.Types.ObjectId, ref: 'Customer' },
  customer_name: { type: String },
  phone: { type: String },
  email: { type: String }
}, { _id: false });

const supplierInfoSchema = new Schema({
  supplier_id: { type: Schema.Types.ObjectId, ref: 'Supplier' },
  supplier_name: { type: String }
}, { _id: false });

const preOrderInfoSchema = new Schema({
  request_id: { type: Schema.Types.ObjectId, ref: 'Request' },
  fulfilled_date: { type: Date }
}, { _id: false });

const soldItemSchema = new Schema({
  part_id: { type: Schema.Types.ObjectId, ref: 'Part' },
  part_name: { type: String },
  sold_quantity: { type: Number, required: true },
  unit_price: { type: Number, required: true },
  purchase_price: { type: Number },
  total_sale_price: { type: Number },
  profit_per_item: { type: Number },
  total_profit: { type: Number },
  supplier_info: supplierInfoSchema,
  storage_cell: { type: String },
  pre_order_info: preOrderInfoSchema
}, { _id: false });

const financialInfoSchema = new Schema({
  subtotal_amount: { type: Number, required: true },
  discount_amount: { type: Number, default: 0 },
  total_amount: { type: Number, required: true },
  total_profit: { type: Number },
  payment_method: { type: String },
  payment_status: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], default: 'pending' }
}, { _id: false });

const cashierInfoSchema = new Schema({
  cashier_id: { type: Schema.Types.ObjectId, ref: 'User' },
  cashier_name: { type: String },
  cash_register_number: { type: String },
  receipt_number: { type: String }
}, { _id: false });

const returnedItemSchema = new Schema({
  part_id: { type: Schema.Types.ObjectId, ref: 'Part' },
  returned_quantity: { type: Number }
}, { _id: false });

const returnInfoSchema = new Schema({
  has_returns: { type: Boolean, default: false },
  return_date: { type: Date },
  return_reason: { type: String },
  return_amount: { type: Number },
  items_returned: [returnedItemSchema]
}, { _id: false });

const saleSchema = new Schema({
  sale_number: { type: String, required: true },
  sale_date: { type: Date, default: Date.now },
  customer_info: customerInfoSchema,
  sold_items: [soldItemSchema],
  financial_info: financialInfoSchema,
  cashier_info: cashierInfoSchema,
  return_info: returnInfoSchema,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

saleSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model('Sale', saleSchema);
