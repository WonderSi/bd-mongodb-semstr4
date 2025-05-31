const mongoose = require('mongoose');
const { Schema } = mongoose;

const supplierInfoSchema = new Schema({
  supplier_id: { type: Schema.Types.ObjectId, ref: 'Supplier' },
  supplier_name: { type: String },
  supplier_category: { type: String },
  manager_name: { type: String }
}, { _id: false });

const orderItemSchema = new Schema({
  part_id: { type: Schema.Types.ObjectId, ref: 'Part' },
  part_name: { type: String },
  ordered_quantity: { type: Number, required: true },
  unit_price: { type: Number, required: true },
  received_quantity: { type: Number, default: 0 },
  defective_quantity: { type: Number, default: 0 },
  storage_cells_assigned: [{ type: String }]
}, { _id: false });

const financialInfoSchema = new Schema({
  subtotal_amount: { type: Number, required: true },
  customs_duty: { type: Number, default: 0 },
  delivery_cost: { type: Number, default: 0 },
  total_amount: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  payment_status: { type: String, enum: ['pending', 'partial', 'completed', 'refunded'], default: 'pending' },
  payment_date: { type: Date }
}, { _id: false });

const deliveryInfoSchema = new Schema({
  expected_delivery_date: { type: Date },
  actual_delivery_date: { type: Date },
  delivery_address: { type: String },
  customs_clearance_date: { type: Date },
  customs_broker: { type: String },
  customs_declaration_number: { type: String },
  delivery_status: { type: String, enum: ['pending', 'in_transit', 'delivered', 'delayed'], default: 'pending' }
}, { _id: false });

const defectInfoSchema = new Schema({
  part_id: { type: Schema.Types.ObjectId, ref: 'Part' },
  part_name: { type: String },
  defective_quantity: { type: Number },
  defect_description: { type: String },
  defect_discovery_date: { type: Date },
  return_to_supplier: { type: Boolean, default: false },
  replacement_requested: { type: Boolean, default: false },
  replacement_received: { type: Boolean, default: false }
}, { _id: false });

const orderSchema = new Schema({
  order_number: { type: String, required: true, unique: true },
  order_date: { type: Date, default: Date.now },
  supplier_info: supplierInfoSchema,
  order_items: [orderItemSchema],
  financial_info: financialInfoSchema,
  delivery_info: deliveryInfoSchema,
  order_status: { type: String, enum: ['draft', 'placed', 'processing', 'shipped', 'delivered', 'completed', 'cancelled'], default: 'draft' },
  defects_info: [defectInfoSchema],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  priority_level: { type: String, enum: ['low', 'medium', 'high', 'urgent'], default: 'medium' }
});

orderSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model('Order', orderSchema);
