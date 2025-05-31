const mongoose = require('mongoose');
const { Schema } = mongoose;

const cellCharacteristicsSchema = new Schema({
  zone: { type: String },
  row: { type: String },
  position: { type: String },
  max_capacity_kg: { type: Number },
  max_volume_m3: { type: Number },
  dimensions: { type: String }
}, { _id: false });

const storedPartSchema = new Schema({
  part_id: { type: Schema.Types.ObjectId, ref: 'Part' },
  quantity: { type: Number },
  date_placed: { type: Date, default: Date.now },
  supplier_id: { type: Schema.Types.ObjectId, ref: 'Supplier' }
}, { _id: false });

const currentStateSchema = new Schema({
  is_occupied: { type: Boolean, default: false },
  current_weight_kg: { type: Number, default: 0 },
  current_volume_m3: { type: Number, default: 0 },
  occupancy_percentage: { type: Number, default: 0 },
  stored_parts: [storedPartSchema]
}, { _id: false });

const usageStatisticsSchema = new Schema({
  total_items_stored: { type: Number, default: 0 },
  average_occupancy_days: { type: Number, default: 0 },
  last_inventory_date: { type: Date },
  turnover_rate: { type: Number, default: 0 }
}, { _id: false });

const warehouseCellSchema = new Schema({
  cell_number: { type: String, required: true, unique: true },
  cell_characteristics: cellCharacteristicsSchema,
  current_state: currentStateSchema,
  usage_statistics: usageStatisticsSchema,
  cell_status: { type: String, default: 'available' },
  created_at: { type: Date, default: Date.now },
  last_updated: { type: Date, default: Date.now }
});

warehouseCellSchema.pre('save', function(next) {
  this.last_updated = Date.now();
  next();
});

module.exports = mongoose.model('Warehouse_Cell', warehouseCellSchema);
