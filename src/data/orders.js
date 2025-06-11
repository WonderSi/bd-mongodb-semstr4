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
    updated_at: new Date("2024-12-16")
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
    updated_at: new Date("2024-12-08")
  },

  {
    _id: "675d4e5f6789abcdef012303",
    order_number: "ORD-2024-001236",
    order_date: new Date("2024-12-10"),

    supplier_info: {
      supplier_id: "675a1b2c3d4e5f6789abcd04",
      supplier_name: "ИП Иванов А.С.",
      supplier_category: "small_production",
      manager_name: "Иванов А.С.",
    },

    order_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef04",
        part_name: "Аккумулятор 12V 74Ah",
        ordered_quantity: 10,
        unit_price: 6200,
        received_quantity: 10,
        defective_quantity: 1,
        storage_cells_assigned: ["C2-08"],
      },
      {
        part_id: "675b2c3d4e5f6789abcdef09",
        part_name: "Диск тормозной Lexus RX",
        ordered_quantity: 8,
        unit_price: 5800,
        received_quantity: 8,
        defective_quantity: 0,
        storage_cells_assigned: ["C2-08"],
      },
    ],

    financial_info: {
      subtotal_amount: 108400,
      customs_duty: 0,
      delivery_cost: 1500,
      total_amount: 129670,
      payment_status: "completed",
      payment_date: new Date("2024-12-15"),
    },

    delivery_info: {
      expected_delivery_date: new Date("2024-12-18"),
      actual_delivery_date: new Date("2024-12-16"),
      delivery_address: "Москва, Складской проезд, 12",
      customs_clearance_date: null,
      customs_broker: null,
      customs_declaration_number: null,
      delivery_status: "delivered",
    },

    order_status: "completed",

    defects_info: [
      {
        part_id: "675b2c3d4e5f6789abcdef04",
        part_name: "Аккумулятор 12V 74Ah",
        defective_quantity: 1,
        defect_description: "Низкая ёмкость",
        defect_discovery_date: new Date("2024-12-18"),
        return_to_supplier: true,
        replacement_requested: true,
        replacement_received: true,
      },
    ],

    created_at: new Date("2024-12-10"),
    updated_at: new Date("2024-12-18")
  },

  {
    _id: "675d4e5f6789abcdef012304",
    order_number: "ORD-2024-001237",
    order_date: new Date("2024-12-15"),

    supplier_info: {
      supplier_id: "675a1b2c3d4e5f6789abcd07",
      supplier_name: "ООО Мерседес Партс",
      supplier_category: "dealer",
      manager_name: "Михайлов С.В.",
    },

    order_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef06",
        part_name: "Амортизатор задний Mercedes W213",
        ordered_quantity: 4,
        unit_price: 15000,
        received_quantity: 4,
        defective_quantity: 0,
        storage_cells_assigned: ["B3-22"],
      },
    ],

    financial_info: {
      subtotal_amount: 60000,
      customs_duty: 3000,
      delivery_cost: 2000,
      total_amount: 76050,
      payment_status: "completed",
      payment_date: new Date("2024-12-15"),
    },

    delivery_info: {
      expected_delivery_date: new Date("2024-12-20"),
      actual_delivery_date: new Date("2024-12-18"),
      delivery_address: "Москва, Складской проезд, 12",
      customs_clearance_date: new Date("2024-12-17"),
      customs_broker: "ООО Таможенные услуги",
      customs_declaration_number: "TD-2024-556814",
      delivery_status: "delivered",
    },

    order_status: "completed",

    defects_info: [],

    created_at: new Date("2024-12-15"),
    updated_at: new Date("2024-12-18")
  },

  {
    _id: "675d4e5f6789abcdef012305",
    order_number: "ORD-2024-001238",
    order_date: new Date("2024-12-20"),

    supplier_info: {
      supplier_id: "675a1b2c3d4e5f6789abcd06",
      supplier_name: "ООО АвтоТехИмпорт",
      supplier_category: "firm",
      manager_name: "Кузнецов Д.А.",
    },

    order_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef05",
        part_name: "Свечи зажигания Bosch FR7NPP332",
        ordered_quantity: 50,
        unit_price: 1000,
        received_quantity: 0,
        defective_quantity: 0,
        storage_cells_assigned: [],
      },
      {
        part_id: "675b2c3d4e5f6789abcdef07",
        part_name: "Салонный фильтр BMW X5 G05",
        ordered_quantity: 15,
        unit_price: 1800,
        received_quantity: 0,
        defective_quantity: 0,
        storage_cells_assigned: [],
      },
      {
        part_id: "675b2c3d4e5f6789abcdef08",
        part_name: "Ремень ГРМ Audi A6 C7",
        ordered_quantity: 10,
        unit_price: 3800,
        received_quantity: 0,
        defective_quantity: 0,
        storage_cells_assigned: [],
      },
    ],

    financial_info: {
      subtotal_amount: 101500,
      customs_duty: 5075,
      delivery_cost: 2500,
      total_amount: 127631.25,
      payment_status: "pending",
      payment_date: null,
    },

    delivery_info: {
      expected_delivery_date: new Date("2025-01-05"),
      actual_delivery_date: null,
      delivery_address: "Москва, Складской проезд, 12",
      customs_clearance_date: null,
      customs_broker: null,
      customs_declaration_number: null,
      delivery_status: "pending",
    },

    order_status: "placed",

    defects_info: [],

    created_at: new Date("2024-12-20"),
    updated_at: new Date("2024-12-20")
  },
  
  {
    _id: "675d4e5f6789abcdef012306",
    order_number: "ORD-2024-001239",
    order_date: new Date("2024-12-23"),

    supplier_info: {
      supplier_id: "675a1b2c3d4e5f6789abcd04",
      supplier_name: "ИП Иванов А.С.",
      supplier_category: "small_production",
      manager_name: "Иванов А.С.",
    },

    order_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef14",
        part_name: "Фильтр топливный Audi Q7",
        ordered_quantity: 5,
        unit_price: 2800,
        received_quantity: 5,
        defective_quantity: 0,
        storage_cells_assigned: ["D1-03"],
      },
    ],

    financial_info: {
      subtotal_amount: 14000,
      customs_duty: 0,
      delivery_cost: 1000,
      total_amount: 17700,
      payment_status: "completed",
      payment_date: new Date("2024-12-23"),
    },

    delivery_info: {
      expected_delivery_date: new Date("2024-12-28"),
      actual_delivery_date: new Date("2024-12-27"),
      delivery_address: "Москва, Складской проезд, 12",
      customs_clearance_date: null,
      customs_broker: null,
      customs_declaration_number: null,
      delivery_status: "delivered",
    },

    order_status: "completed",

    defects_info: [],

    created_at: new Date("2024-12-23"),
    updated_at: new Date("2024-12-27")
  },
  
  {
    _id: "675d4e5f6789abcdef012307",
    order_number: "ORD-2024-001240",
    order_date: new Date("2024-12-28"),

    supplier_info: {
      supplier_id: "675a1b2c3d4e5f6789abcd05",
      supplier_name: "ООО БМВ Запчасти",
      supplier_category: "dealer",
      manager_name: "Сидорова А.П.",
    },

    order_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef12",
        part_name: "Насос гидроусилителя BMW 5-Series F10",
        ordered_quantity: 2,
        unit_price: 28000,
        received_quantity: 0,
        defective_quantity: 0,
        storage_cells_assigned: [],
      },
      {
        part_id: "675b2c3d4e5f6789abcdef13",
        part_name: "Комплект тормозных дисков BMW 5-Series F10",
        ordered_quantity: 4,
        unit_price: 12000,
        received_quantity: 0,
        defective_quantity: 0,
        storage_cells_assigned: [],
      },
    ],

    financial_info: {
      subtotal_amount: 104000,
      customs_duty: 5200,
      delivery_cost: 3000,
      total_amount: 131236,
      payment_status: "pending",
      payment_date: null,
    },

    delivery_info: {
      expected_delivery_date: new Date("2025-01-20"),
      actual_delivery_date: null,
      delivery_address: "Москва, Складской проезд, 12",
      customs_clearance_date: null,
      customs_broker: null,
      customs_declaration_number: null,
      delivery_status: "pending",
    },

    order_status: "placed",

    defects_info: [],

    created_at: new Date("2024-12-28"),
    updated_at: new Date("2024-12-28")
  },
  
  {
    _id: "675d4e5f6789abcdef012308",
    order_number: "ORD-2025-000001",
    order_date: new Date("2025-01-04"),

    supplier_info: {
      supplier_id: "675a1b2c3d4e5f6789abcd09",
      supplier_name: "ООО ТойотаПартс",
      supplier_category: "dealer",
      manager_name: "Васильев Р.О.",
    },

    order_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef15",
        part_name: "Генератор Toyota Camry XV70",
        ordered_quantity: 2,
        unit_price: 24000,
        received_quantity: 0,
        defective_quantity: 0,
        storage_cells_assigned: [],
      },
    ],

    financial_info: {
      subtotal_amount: 48000,
      customs_duty: 2400,
      delivery_cost: 2000,
      total_amount: 61440,
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

    created_at: new Date("2025-01-04"),
    updated_at: new Date("2025-01-04")
  },
  
  {
    _id: "675d4e5f6789abcdef012309",
    order_number: "ORD-2025-000002",
    order_date: new Date("2025-01-05"),

    supplier_info: {
      supplier_id: "675a1b2c3d4e5f6789abcd01",
      supplier_name: "ООО Автодетали Премиум",
      supplier_category: "firm",
      manager_name: "Петров И.И.",
    },

    order_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef20",
        part_name: "Комплект сцепления Audi A4 B8",
        ordered_quantity: 3,
        unit_price: 18500,
        received_quantity: 3,
        defective_quantity: 0,
        storage_cells_assigned: ["B1-12"],
      },
      {
        part_id: "675b2c3d4e5f6789abcdef21",
        part_name: "Маховик Audi A4 B8",
        ordered_quantity: 2,
        unit_price: 22000,
        received_quantity: 2,
        defective_quantity: 0,
        storage_cells_assigned: ["B1-13"],
      },
    ],

    financial_info: {
      subtotal_amount: 99500,
      customs_duty: 4975,
      delivery_cost: 2500,
      total_amount: 125492.5,
      payment_status: "completed",
      payment_date: new Date("2025-01-05"),
    },

    delivery_info: {
      expected_delivery_date: new Date("2025-01-12"),
      actual_delivery_date: new Date("2025-01-10"),
      delivery_address: "Москва, Складской проезд, 12",
      customs_clearance_date: new Date("2025-01-09"),
      customs_broker: "ООО Таможенные услуги",
      customs_declaration_number: "TD-2025-000013",
      delivery_status: "delivered",
    },

    order_status: "completed",

    defects_info: [],

    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-10")
  },
  
  {
    _id: "675d4e5f6789abcdef012310",
    order_number: "ORD-2025-000003",
    order_date: new Date("2025-01-06"),

    supplier_info: {
      supplier_id: "675a1b2c3d4e5f6789abcd10",
      supplier_name: "ООО ВольвоПремиум",
      supplier_category: "dealer",
      manager_name: "Соколова Е.А.",
    },

    order_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef16",
        part_name: "Радиатор охлаждения Volvo XC90",
        ordered_quantity: 3,
        unit_price: 19000,
        received_quantity: 0,
        defective_quantity: 0,
        storage_cells_assigned: [],
      },
      {
        part_id: "675b2c3d4e5f6789abcdef17",
        part_name: "Термостат Volvo XC90",
        ordered_quantity: 5,
        unit_price: 4500,
        received_quantity: 0,
        defective_quantity: 0,
        storage_cells_assigned: [],
      },
      {
        part_id: "675b2c3d4e5f6789abcdef18",
        part_name: "Помпа системы охлаждения Volvo XC90",
        ordered_quantity: 2,
        unit_price: 10000,
        received_quantity: 0,
        defective_quantity: 0,
        storage_cells_assigned: [],
      },
    ],

    financial_info: {
      subtotal_amount: 97500,
      customs_duty: 4875,
      delivery_cost: 3500,
      total_amount: 124394,
      payment_status: "pending",
      payment_date: null,
    },

    delivery_info: {
      expected_delivery_date: new Date("2025-01-25"),
      actual_delivery_date: null,
      delivery_address: "Москва, Складской проезд, 12",
      customs_clearance_date: null,
      customs_broker: null,
      customs_declaration_number: null,
      delivery_status: "pending",
    },

    order_status: "placed",

    defects_info: [],

    created_at: new Date("2025-01-06"),
    updated_at: new Date("2025-01-06")
  }
]; 