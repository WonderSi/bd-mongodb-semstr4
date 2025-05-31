module.exports = [
  {
    _id: "675c3d4e5f6789abcdef0301",
    cell_number: "A1-15",
    cell_characteristics: {
      zone: "A",
      row: "1",
      position: "15",
      max_capacity_kg: 500,
      max_volume_m3: 2.5,
      dimensions: "100x200x125 см"
    },
    current_state: {
      is_occupied: true,
      current_weight_kg: 75,
      current_volume_m3: 0.8,
      occupancy_percentage: 32,
      stored_parts: [
        {
          part_id: "675b2c3d4e5f6789abcdef01",
          quantity: 15,
          date_placed: new Date("2024-12-14"),
          supplier_id: "675a1b2c3d4e5f6789abcd01"
        },
        {
          part_id: "675b2c3d4e5f6789abcdef02",
          quantity: 25,
          date_placed: new Date("2024-12-14"),
          supplier_id: "675a1b2c3d4e5f6789abcd01"
        }
      ]
    },
    usage_statistics: {
      total_items_stored: 156,
      average_occupancy_days: 12,
      last_inventory_date: new Date("2024-12-01"),
      turnover_rate: 8.5
    },
    cell_status: "active",
    created_at: new Date("2020-01-01"),
    last_updated: new Date("2024-12-25")
  },

  {
    _id: "675c3d4e5f6789abcdef0302",
    cell_number: "B3-22",
    cell_characteristics: {
      zone: "B",
      row: "3",
      position: "22",
      max_capacity_kg: 750,
      max_volume_m3: 3.2,
      dimensions: "120x220x140 см"
    },
    current_state: {
      is_occupied: false,
      current_weight_kg: 0,
      current_volume_m3: 0,
      occupancy_percentage: 0,
      stored_parts: []
    },
    usage_statistics: {
      total_items_stored: 89,
      average_occupancy_days: 18,
      last_inventory_date: new Date("2024-12-01"),
      turnover_rate: 6.2
    },
    cell_status: "available",
    created_at: new Date("2020-01-01"),
    last_updated: new Date("2024-12-20")
  },

  {
    _id: "675c3d4e5f6789abcdef0303",
    cell_number: "C2-08",
    cell_characteristics: {
      zone: "C",
      row: "2",
      position: "8",
      max_capacity_kg: 300,
      max_volume_m3: 1.8,
      dimensions: "80x180x100 см"
    },
    current_state: {
      is_occupied: false,
      current_weight_kg: 0,
      current_volume_m3: 0,
      occupancy_percentage: 0,
      stored_parts: []
    },
    usage_statistics: {
      total_items_stored: 203,
      average_occupancy_days: 8,
      last_inventory_date: new Date("2024-12-01"),
      turnover_rate: 12.1
    },
    cell_status: "maintenance",
    created_at: new Date("2020-01-01"),
    last_updated: new Date("2024-12-22")
  },

  {
    _id: "675c3d4e5f6789abcdef0304",
    cell_number: "B2-08",
    cell_characteristics: {
      zone: "B",
      row: "2",
      position: "8",
      max_capacity_kg: 400,
      max_volume_m3: 2.0,
      dimensions: "90x190x110 см"
    },
    current_state: {
      is_occupied: false,
      current_weight_kg: 0,
      current_volume_m3: 0,
      occupancy_percentage: 0,
      stored_parts: []
    },
    usage_statistics: {
      total_items_stored: 78,
      average_occupancy_days: 15,
      last_inventory_date: new Date("2024-12-01"),
      turnover_rate: 7.3
    },
    cell_status: "available",
    created_at: new Date("2020-01-01"),
    last_updated: new Date("2024-12-21")
  }
]; 