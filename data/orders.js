module.exports = [
  {
    _id: "675d4e5f6789abcdef012301",
    order_number: "ORD-2024-001234",
    order_date: new Date("2024-12-01"),

    supplier_info: {
      supplier_id: "675a1b2c3d4e5f6789abcd01",
      supplier_name: "ООО Автодетали Премиум",
      supplier_category: "firm",
      manager_name: "Петров И.И.",
    },

    order_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef01",
        part_name: "Тормозные колодки передние BMW X5",
        ordered_quantity: 20,
        unit_price: 4500,
        received_quantity: 20,
        defective_quantity: 1,
        storage_cells_assigned: ["A1-15", "A1-16"],
      },
      {
        part_id: "675b2c3d4e5f6789abcdef02",
        part_name: "Масляный фильтр Mercedes E-Class",
        ordered_quantity: 50,
        unit_price: 850,
        received_quantity: 50,
        defective_quantity: 0,
        storage_cells_assigned: ["B2-08", "B2-09"],
      },
    ],

    financial_info: {
      subtotal_amount: 132500,
      customs_duty: 6625,
      delivery_cost: 5000,
      total_amount: 167975,
      currency: "RUB",
      payment_status: "completed",
      payment_date: new Date("2024-12-10"),
    },

    delivery_info: {
      expected_delivery_date: new Date("2024-12-15"),
      actual_delivery_date: new Date("2024-12-14"),
      delivery_address: "Москва, Складской проезд, 12",
      customs_clearance_date: new Date("2024-12-13"),
      customs_broker: "ООО Таможенные услуги",
      customs_declaration_number: "TD-2024-556789",
      delivery_status: "delivered",
    },

    order_status: "completed",

    defects_info: [
      {
        part_id: "675b2c3d4e5f6789abcdef01",
        part_name: "Тормозные колодки передние BMW X5",
        defective_quantity: 1,
        defect_description: "Трещина в материале",
        defect_discovery_date: new Date("2024-12-16"),
        return_to_supplier: true,
        replacement_requested: true,
        replacement_received: false,
      },
    ],

    created_at: new Date("2024-12-01"),
    updated_at: new Date("2024-12-16"),
    priority_level: "high",
  },

  {
    _id: "675d4e5f6789abcdef012302",
    order_number: "ORD-2024-001235",
    order_date: new Date("2024-12-08"),

    supplier_info: {
      supplier_id: "675a1b2c3d4e5f6789abcd05",
      supplier_name: "ООО БМВ Запчасти",
      supplier_category: "dealer",
      manager_name: "Сидорова А.П.",
    },

    order_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef03",
        part_name: "Стартер BMW X3 F25",
        ordered_quantity: 2,
        unit_price: 22000,
        received_quantity: 0,
        defective_quantity: 0,
        storage_cells_assigned: [],
      },
    ],

    financial_info: {
      subtotal_amount: 44000,
      customs_duty: 0,
      delivery_cost: 2000,
      total_amount: 53920,
      currency: "RUB",
      payment_status: "pending",
      payment_date: null,
    },

    delivery_info: {
      expected_delivery_date: new Date("2025-01-15"),
      actual_delivery_date: null,
      delivery_address: "Москва, Складской проезд, 12",
      customs_clearance_date: null,
      customs_broker: null,
      customs_declaration_number: null,
      delivery_status: "pending",
    },

    order_status: "placed",

    defects_info: [],

    created_at: new Date("2024-12-08"),
    updated_at: new Date("2024-12-08"),
    priority_level: "medium",
  },
]; 