const mongoose = require('mongoose');
const { Schema } = mongoose;

const specificationsSchema = new Schema({
  manufacturer: { type: String },
  compatibility: [{ type: String }],
  weight_kg: { type: Number },
  dimensions: { type: String },
  material: { type: String }
}, { _id: false });

const supplierInfoSchema = new Schema({
  supplier_id: { type: Schema.Types.ObjectId, ref: 'Supplier' },
  supplier_name: { type: String },
  supplier_category: { type: String },
  price_per_unit: { type: Number },
  delivery_days_min: { type: Number },
  delivery_days_max: { type: Number }
}, { _id: false });

const warehouseInfoSchema = new Schema({
  current_stock: { type: Number, default: 0 },
  reserved_stock: { type: Number, default: 0 },
  storage_cells: [{ type: String }]
}, { _id: false });

const salesStatisticsSchema = new Schema({
  total_sold_quantity: { type: Number, default: 0 },
  total_sold_amount: { type: Number, default: 0 },
  last_30_days_sold: { type: Number, default: 0 },
  last_sale_date: { type: Date }
}, { _id: false });

const partSchema = new Schema({
  part_name: { type: String, required: true },
  part_category: { type: String },
  specifications: specificationsSchema,
  suppliers_info: [supplierInfoSchema],
  warehouse_info: warehouseInfoSchema,
  sales_statistics: salesStatisticsSchema,
  creation_date: { type: Date, default: Date.now },
  last_updated: { type: Date, default: Date.now },
});

partSchema.pre('save', function(next) {
  this.last_updated = Date.now();
  next();
});

module.exports = mongoose.model('Part', partSchema);
