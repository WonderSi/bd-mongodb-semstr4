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
      stored_parts: [
        {
          part_id: "675b2c3d4e5f6789abcdef01",
          part_name: "Тормозные колодки передние BMW X5",
          quantity: 15,
          date_placed: new Date("2024-12-14"),
          supplier_id: "675a1b2c3d4e5f6789abcd01"
        },
        {
          part_id: "675b2c3d4e5f6789abcdef02",
          part_name: "Масляный фильтр Mercedes E-Class",
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
    },
    cell_status: "occupied",
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
      stored_parts: []
    },
    usage_statistics: {
      total_items_stored: 89,
      average_occupancy_days: 18,
      last_inventory_date: new Date("2024-12-01"),
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
      stored_parts: []
    },
    usage_statistics: {
      total_items_stored: 203,
      average_occupancy_days: 8,
      last_inventory_date: new Date("2024-12-01"),
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
      stored_parts: []
    },
    usage_statistics: {
      total_items_stored: 78,
      average_occupancy_days: 15,
      last_inventory_date: new Date("2024-12-01"),
    },
    cell_status: "available",
    created_at: new Date("2020-01-01"),
    last_updated: new Date("2024-12-21")
  },

  {
    _id: "675c3d4e5f6789abcdef0305",
    cell_number: "A1-16",
    cell_characteristics: {
      zone: "A",
      row: "1",
      position: "16",
      max_capacity_kg: 450,
      max_volume_m3: 2.2,
      dimensions: "95x195x120 см"
    },
    current_state: {
      is_occupied: true,
      current_weight_kg: 40,
      current_volume_m3: 0.5,
      stored_parts: [
        {
          part_id: "675b2c3d4e5f6789abcdef07",
          part_name: "Салонный фильтр BMW X5 G05",
          quantity: 12,
          date_placed: new Date("2024-12-15"),
          supplier_id: "675a1b2c3d4e5f6789abcd05"
        },
        {
          part_id: "675b2c3d4e5f6789abcdef01",
          part_name: "Тормозные колодки передние BMW X5",
          quantity: 5,
          date_placed: new Date("2024-12-14"),
          supplier_id: "675a1b2c3d4e5f6789abcd01"
        }
      ]
    },
    usage_statistics: {
      total_items_stored: 124,
      average_occupancy_days: 14,
      last_inventory_date: new Date("2024-12-01"),
    },
    cell_status: "occupied",
    created_at: new Date("2020-01-01"),
    last_updated: new Date("2024-12-23")
  },
  
  // Новые ячейки склада
  {
    _id: "675c3d4e5f6789abcdef0306",
    cell_number: "D1-03",
    cell_characteristics: {
      zone: "D",
      row: "1",
      position: "03",
      max_capacity_kg: 350,
      max_volume_m3: 1.8,
      dimensions: "85x185x115 см"
    },
    current_state: {
      is_occupied: true,
      current_weight_kg: 9,
      current_volume_m3: 0.3,
      stored_parts: [
        {
          part_id: "675b2c3d4e5f6789abcdef11",
          part_name: "Фильтр топливный Audi Q7",
          quantity: 30,
          date_placed: new Date("2024-02-18"),
          supplier_id: "675a1b2c3d4e5f6789abcd08"
        }
      ]
    },
    usage_statistics: {
      total_items_stored: 65,
      average_occupancy_days: 12,
      last_inventory_date: new Date("2024-12-01"),
    },
    cell_status: "occupied",
    created_at: new Date("2020-01-01"),
    last_updated: new Date("2024-12-30")
  },
  
  {
    _id: "675c3d4e5f6789abcdef0307",
    cell_number: "B3-24",
    cell_characteristics: {
      zone: "B",
      row: "3",
      position: "24",
      max_capacity_kg: 600,
      max_volume_m3: 2.8,
      dimensions: "110x210x125 см"
    },
    current_state: {
      is_occupied: true,
      current_weight_kg: 57,
      current_volume_m3: 0.6,
      stored_parts: [
        {
          part_id: "675b2c3d4e5f6789abcdef12",
          part_name: "Насос гидроусилителя BMW 5-Series F10",
          quantity: 15,
          date_placed: new Date("2024-03-15"),
          supplier_id: "675a1b2c3d4e5f6789abcd05"
        }
      ]
    },
    usage_statistics: {
      total_items_stored: 72,
      average_occupancy_days: 16,
      last_inventory_date: new Date("2024-12-01"),
    },
    cell_status: "occupied",
    created_at: new Date("2020-01-01"),
    last_updated: new Date("2024-12-28")
  },
  
  {
    _id: "675c3d4e5f6789abcdef0308",
    cell_number: "C1-10",
    cell_characteristics: {
      zone: "C",
      row: "1",
      position: "10",
      max_capacity_kg: 750,
      max_volume_m3: 3.0,
      dimensions: "120x220x115 см"
    },
    current_state: {
      is_occupied: true,
      current_weight_kg: 370,
      current_volume_m3: 1.2,
      stored_parts: [
        {
          part_id: "675b2c3d4e5f6789abcdef13",
          part_name: "Комплект тормозных дисков BMW 5-Series F10",
          quantity: 20,
          date_placed: new Date("2024-01-22"),
          supplier_id: "675a1b2c3d4e5f6789abcd05"
        }
      ]
    },
    usage_statistics: {
      total_items_stored: 108,
      average_occupancy_days: 11,
      last_inventory_date: new Date("2024-12-01"),
    },
    cell_status: "occupied",
    created_at: new Date("2020-01-01"),
    last_updated: new Date("2024-12-26")
  },
  
  {
    _id: "675c3d4e5f6789abcdef0309",
    cell_number: "D2-15",
    cell_characteristics: {
      zone: "D",
      row: "2",
      position: "15",
      max_capacity_kg: 550,
      max_volume_m3: 2.5,
      dimensions: "105x205x120 см"
    },
    current_state: {
      is_occupied: true,
      current_weight_kg: 162.5,
      current_volume_m3: 1.0,
      stored_parts: [
        {
          part_id: "675b2c3d4e5f6789abcdef14",
          part_name: "Радиатор охлаждения Volvo XC90",
          quantity: 25,
          date_placed: new Date("2024-04-10"),
          supplier_id: "675a1b2c3d4e5f6789abcd10"
        }
      ]
    },
    usage_statistics: {
      total_items_stored: 92,
      average_occupancy_days: 14,
      last_inventory_date: new Date("2024-12-01"),
    },
    cell_status: "occupied",
    created_at: new Date("2020-01-01"),
    last_updated: new Date("2024-12-30")
  },
  
  {
    _id: "675c3d4e5f6789abcdef0310",
    cell_number: "B4-11",
    cell_characteristics: {
      zone: "B",
      row: "4",
      position: "11",
      max_capacity_kg: 500,
      max_volume_m3: 2.2,
      dimensions: "100x200x110 см"
    },
    current_state: {
      is_occupied: true,
      current_weight_kg: 52,
      current_volume_m3: 0.5,
      stored_parts: [
        {
          part_id: "675b2c3d4e5f6789abcdef15",
          part_name: "Генератор Toyota Camry XV70",
          quantity: 10,
          date_placed: new Date("2024-05-20"),
          supplier_id: "675a1b2c3d4e5f6789abcd09"
        }
      ]
    },
    usage_statistics: {
      total_items_stored: 78,
      average_occupancy_days: 13,
      last_inventory_date: new Date("2024-12-01"),
    },
    cell_status: "occupied",
    created_at: new Date("2020-01-01"),
    last_updated: new Date("2024-12-27")
  }
]; 
