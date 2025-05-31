const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerInfoSchema = new Schema({
  customer_id: { type: Schema.Types.ObjectId, ref: 'Customer' },
  customer_name: { type: String },
  phone: { type: String },
  email: { type: String }
}, { _id: false });

const fulfillmentInfoSchema = new Schema({
  fulfilled_quantity: { type: Number, default: 0 },
  fulfilled_date: { type: Date },
  sale_id: { type: Schema.Types.ObjectId, ref: 'Sale' },
  order_id: { type: Schema.Types.ObjectId, ref: 'Order' }
}, { _id: false });

const requestedItemSchema = new Schema({
  part_id: { type: Schema.Types.ObjectId, ref: 'Part' },
  part_name: { type: String },
  requested_quantity: { type: Number, required: true },
  max_unit_price: { type: Number },
  total_max_amount: { type: Number },
  fulfillment_info: fulfillmentInfoSchema
}, { _id: false });

const requestSummarySchema = new Schema({
  total_positions: { type: Number, default: 0 },
  total_quantity: { type: Number, default: 0 },
  total_amount: { type: Number, default: 0 },
  fulfilled_quantity: { type: Number, default: 0 }
}, { _id: false });

const expectedSupplyInfoSchema = new Schema({
  expected_delivery_date: { type: Date },
  expected_supplier_id: { type: Schema.Types.ObjectId, ref: 'Supplier' },
  expected_order_id: { type: Schema.Types.ObjectId, ref: 'Order' }
}, { _id: false });

const customerRequestSchema = new Schema({
  request_number: { type: String, required: true, unique: true },
  request_date: { type: Date, default: Date.now },
  customer_info: customerInfoSchema,
  requested_items: [requestedItemSchema],
  request_summary: requestSummarySchema,
  request_status: { type: String, enum: ['pending', 'processing', 'partially_fulfilled', 'fulfilled', 'cancelled'], default: 'pending' },
  expected_supply_info: expectedSupplyInfoSchema,
  priority_level: { type: String, enum: ['low', 'medium', 'high', 'urgent'], default: 'medium' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

customerRequestSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model('Customer_Request', customerRequestSchema);
