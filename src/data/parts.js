module.exports = [
  {
    _id: "675b2c3d4e5f6789abcdef01",
    part_name: "Тормозные колодки передние BMW X5",
    part_category: "brake_system",

    specifications: {
      manufacturer: "Brembo",
      compatibility: ["BMW X5 E70", "BMW X5 F15"],
      weight_kg: 2.5,
      dimensions: "300x150x20 мм",
      material: "Керамика",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd01",
        supplier_name: "ООО Автодетали Премиум",
        supplier_category: "firm",
        price_per_unit: 4500,
        delivery_days_min: 3,
        delivery_days_max: 7,
      },
      {
        supplier_id: "675a1b2c3d4e5f6789abcd04",
        supplier_name: "ИП Иванов А.С.",
        supplier_category: "small_production",
        price_per_unit: 3200,
        delivery_days_min: 1,
        delivery_days_max: 4,
      },
    ],

    warehouse_info: {
      current_stock: 15,
      reserved_stock: 3,
      storage_cells: ["A1-15", "A1-16"],
    },

    sales_statistics: {
      total_sold_quantity: 234,
      total_sold_amount: 1053000,
      last_30_days_sold: 12,
      last_sale_date: new Date("2024-12-20"),
    },

    creation_date: new Date("2022-03-15"),
    last_updated: new Date("2024-12-25"),
  },

  {
    _id: "675b2c3d4e5f6789abcdef02",
    part_name: "Масляный фильтр Mercedes E-Class",
    part_category: "engine",

    specifications: {
      manufacturer: "Mann",
      compatibility: ["Mercedes E-Class W212", "Mercedes E-Class W213"],
      weight_kg: 1.5,
      dimensions: "108x135 мм",
      material: "Бумага, сталь",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd01",
        supplier_name: "ООО Автодетали Премиум",
        supplier_category: "firm",
        price_per_unit: 850,
        delivery_days_min: 3,
        delivery_days_max: 7,
      },
    ],

    warehouse_info: {
      current_stock: 25,
      reserved_stock: 5,
      storage_cells: ["A1-15", "B2-08"],
    },

    sales_statistics: {
      total_sold_quantity: 156,
      total_sold_amount: 187200,
      last_30_days_sold: 8,
      last_sale_date: new Date("2024-12-21"),
    },

    creation_date: new Date("2022-06-10"),
    last_updated: new Date("2024-12-25")
  },

  {
    _id: "675b2c3d4e5f6789abcdef03",
    part_name: "Стартер BMW X3 F25",
    part_category: "electrical_system",

    specifications: {
      manufacturer: "Bosch",
      compatibility: ["BMW X3 F25", "BMW X3 G01"],
      weight_kg: 4.8,
      dimensions: "230x180x160 мм",
      material: "Металл, пластик",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd05",
        supplier_name: "ООО БМВ Запчасти",
        supplier_category: "dealer",
        price_per_unit: 22000,
        delivery_days_min: 2,
        delivery_days_max: 8,
      },
      {
        supplier_id: "675a1b2c3d4e5f6789abcd01",
        supplier_name: "ООО Автодетали Премиум",
        supplier_category: "firm",
        price_per_unit: 18500,
        delivery_days_min: 3,
        delivery_days_max: 10,
      },
    ],

    warehouse_info: {
      current_stock: 2,
      reserved_stock: 2,
      storage_cells: ["B3-22"],
    },

    sales_statistics: {
      total_sold_quantity: 32,
      total_sold_amount: 704000,
      last_30_days_sold: 2,
      last_sale_date: new Date("2024-12-15"),
    },

    creation_date: new Date("2023-01-05"),
    last_updated: new Date("2024-12-15")
  },

  {
    _id: "675b2c3d4e5f6789abcdef04",
    part_name: "Аккумулятор 12V 74Ah",
    part_category: "electrical_system",

    specifications: {
      manufacturer: "Varta",
      compatibility: ["Универсальный"],
      weight_kg: 17.5,
      dimensions: "278x175x190 мм",
      material: "Свинец, пластик",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd06",
        supplier_name: "ООО АвтоТехИмпорт",
        supplier_category: "firm",
        price_per_unit: 6800,
        delivery_days_min: 4,
        delivery_days_max: 12,
      },
      {
        supplier_id: "675a1b2c3d4e5f6789abcd04",
        supplier_name: "ИП Иванов А.С.",
        supplier_category: "small_production",
        price_per_unit: 6200,
        delivery_days_min: 1,
        delivery_days_max: 5,
      },
    ],

    warehouse_info: {
      current_stock: 8,
      reserved_stock: 1,
      storage_cells: ["C2-08"],
    },

    sales_statistics: {
      total_sold_quantity: 67,
      total_sold_amount: 456600,
      last_30_days_sold: 4,
      last_sale_date: new Date("2024-12-22"),
    },

    creation_date: new Date("2022-10-20"),
    last_updated: new Date("2024-12-22")
  },

  {
    _id: "675b2c3d4e5f6789abcdef05",
    part_name: "Свечи зажигания Bosch FR7NPP332",
    part_category: "engine",

    specifications: {
      manufacturer: "Bosch",
      compatibility: ["Mercedes", "BMW", "Audi"],
      weight_kg: 0.2,
      dimensions: "80x20x20 мм",
      material: "Металл, керамика",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd01",
        supplier_name: "ООО Автодетали Премиум",
        supplier_category: "firm",
        price_per_unit: 950,
        delivery_days_min: 3,
        delivery_days_max: 7,
      },
      {
        supplier_id: "675a1b2c3d4e5f6789abcd06",
        supplier_name: "ООО АвтоТехИмпорт",
        supplier_category: "firm",
        price_per_unit: 1000,
        delivery_days_min: 4,
        delivery_days_max: 12,
      },
    ],

    warehouse_info: {
      current_stock: 40,
      reserved_stock: 0,
      storage_cells: ["B2-08"],
    },

    sales_statistics: {
      total_sold_quantity: 320,
      total_sold_amount: 384000,
      last_30_days_sold: 15,
      last_sale_date: new Date("2024-12-24"),
    },

    creation_date: new Date("2022-05-18"),
    last_updated: new Date("2024-12-24")
  },

  {
    _id: "675b2c3d4e5f6789abcdef06",
    part_name: "Амортизатор задний Mercedes W213",
    part_category: "suspension",

    specifications: {
      manufacturer: "Bilstein",
      compatibility: ["Mercedes E-Class W213"],
      weight_kg: 5.2,
      dimensions: "560x120x120 мм",
      material: "Сталь, алюминий",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd07",
        supplier_name: "ООО Мерседес Партс",
        supplier_category: "dealer",
        price_per_unit: 15000,
        delivery_days_min: 3,
        delivery_days_max: 9,
      },
      {
        supplier_id: "675a1b2c3d4e5f6789abcd01",
        supplier_name: "ООО Автодетали Премиум",
        supplier_category: "firm",
        price_per_unit: 13500,
        delivery_days_min: 3,
        delivery_days_max: 10,
      },
    ],

    warehouse_info: {
      current_stock: 4,
      reserved_stock: 0,
      storage_cells: ["B3-22"],
    },

    sales_statistics: {
      total_sold_quantity: 28,
      total_sold_amount: 476000,
      last_30_days_sold: 2,
      last_sale_date: new Date("2024-12-18"),
    },

    creation_date: new Date("2023-03-12"),
    last_updated: new Date("2024-12-18")
  },

  {
    _id: "675b2c3d4e5f6789abcdef07",
    part_name: "Салонный фильтр BMW X5 G05",
    part_category: "interior",

    specifications: {
      manufacturer: "Mann",
      compatibility: ["BMW X5 G05", "BMW X7 G07"],
      weight_kg: 0.3,
      dimensions: "280x210x30 мм",
      material: "Бумага, активированный уголь",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd05",
        supplier_name: "ООО БМВ Запчасти",
        supplier_category: "dealer",
        price_per_unit: 2200,
        delivery_days_min: 2,
        delivery_days_max: 8,
      },
      {
        supplier_id: "675a1b2c3d4e5f6789abcd06",
        supplier_name: "ООО АвтоТехИмпорт",
        supplier_category: "firm",
        price_per_unit: 1800,
        delivery_days_min: 4,
        delivery_days_max: 12,
      },
    ],

    warehouse_info: {
      current_stock: 12,
      reserved_stock: 0,
      storage_cells: ["A1-16"],
    },

    sales_statistics: {
      total_sold_quantity: 96,
      total_sold_amount: 211200,
      last_30_days_sold: 8,
      last_sale_date: new Date("2024-12-23"),
    },

    creation_date: new Date("2023-05-10"),
    last_updated: new Date("2024-12-23")
  },

  {
    _id: "675b2c3d4e5f6789abcdef08",
    part_name: "Ремень ГРМ Audi A6 C7",
    part_category: "engine",

    specifications: {
      manufacturer: "Continental",
      compatibility: ["Audi A6 C7", "Audi A7 C7"],
      weight_kg: 0.5,
      dimensions: "180x25x15 мм",
      material: "Резина, нейлон",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd06",
        supplier_name: "ООО АвтоТехИмпорт",
        supplier_category: "firm",
        price_per_unit: 3800,
        delivery_days_min: 4,
        delivery_days_max: 12,
      },
      {
        supplier_id: "675a1b2c3d4e5f6789abcd01",
        supplier_name: "ООО Автодетали Премиум",
        supplier_category: "firm",
        price_per_unit: 4200,
        delivery_days_min: 3,
        delivery_days_max: 10,
      },
    ],

    warehouse_info: {
      current_stock: 6,
      reserved_stock: 1,
      storage_cells: ["B2-08"],
    },

    sales_statistics: {
      total_sold_quantity: 45,
      total_sold_amount: 202500,
      last_30_days_sold: 3,
      last_sale_date: new Date("2024-12-20"),
    },

    creation_date: new Date("2022-09-15"),
    last_updated: new Date("2024-12-20")
  },

  {
    _id: "675b2c3d4e5f6789abcdef09",
    part_name: "Диск тормозной Lexus RX",
    part_category: "brake_system",

    specifications: {
      manufacturer: "TRW",
      compatibility: ["Lexus RX 350", "Lexus RX 450h"],
      weight_kg: 7.8,
      dimensions: "320x50 мм",
      material: "Высокоуглеродистая сталь",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd01",
        supplier_name: "ООО Автодетали Премиум",
        supplier_category: "firm",
        price_per_unit: 6500,
        delivery_days_min: 3,
        delivery_days_max: 10,
      },
      {
        supplier_id: "675a1b2c3d4e5f6789abcd04",
        supplier_name: "ИП Иванов А.С.",
        supplier_category: "small_production",
        price_per_unit: 5800,
        delivery_days_min: 1,
        delivery_days_max: 5,
      },
    ],

    warehouse_info: {
      current_stock: 10,
      reserved_stock: 2,
      storage_cells: ["C2-08"],
    },

    sales_statistics: {
      total_sold_quantity: 54,
      total_sold_amount: 351000,
      last_30_days_sold: 4,
      last_sale_date: new Date("2024-12-19"),
    },

    creation_date: new Date("2023-02-20"),
    last_updated: new Date("2024-12-19")
  },

  {
    _id: "675b2c3d4e5f6789abcdef10",
    part_name: "Фара правая Mercedes C-Class W205",
    part_category: "body",

    specifications: {
      manufacturer: "Hella",
      compatibility: ["Mercedes C-Class W205"],
      weight_kg: 4.5,
      dimensions: "650x350x200 мм",
      material: "Пластик, стекло, металл",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd07",
        supplier_name: "ООО Мерседес Партс",
        supplier_category: "dealer",
        price_per_unit: 48000,
        delivery_days_min: 3,
        delivery_days_max: 9,
      },
      {
        supplier_id: "675a1b2c3d4e5f6789abcd06",
        supplier_name: "ООО АвтоТехИмпорт",
        supplier_category: "firm",
        price_per_unit: 42000,
        delivery_days_min: 4,
        delivery_days_max: 12,
      },
    ],

    warehouse_info: {
      current_stock: 2,
      reserved_stock: 1,
      storage_cells: ["B3-22"],
    },

    sales_statistics: {
      total_sold_quantity: 15,
      total_sold_amount: 780000,
      last_30_days_sold: 1,
      last_sale_date: new Date("2024-12-15"),
    },

    creation_date: new Date("2023-01-25"),
    last_updated: new Date("2024-12-15")
  },
  
  // Новые товары с датами создания после 2024-01-01
  {
    _id: "675b2c3d4e5f6789abcdef11",
    part_name: "Фильтр топливный Audi Q7",
    part_category: "engine",

    specifications: {
      manufacturer: "Mann",
      compatibility: ["Audi Q7", "Audi Q8"],
      weight_kg: 0.3,
      dimensions: "90x90x120 мм",
      material: "Пластик, фильтрующий материал",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd08",
        supplier_name: "ООО АудиЦентр",
        supplier_category: "dealer",
        price_per_unit: 3200,
        delivery_days_min: 3,
        delivery_days_max: 10,
      }
    ],

    warehouse_info: {
      current_stock: 30,
      reserved_stock: 0,
      storage_cells: ["D1-03"],
    },

    sales_statistics: {
      total_sold_quantity: 12,
      total_sold_amount: 43200,
      last_30_days_sold: 4,
      last_sale_date: new Date("2024-12-30"),
    },

    creation_date: new Date("2024-02-15"),
    last_updated: new Date("2024-12-30")
  },
  
  {
    _id: "675b2c3d4e5f6789abcdef12",
    part_name: "Насос гидроусилителя BMW 5-Series F10",
    part_category: "steering",

    specifications: {
      manufacturer: "ZF",
      compatibility: ["BMW 5-Series F10", "BMW 5-Series G30"],
      weight_kg: 3.8,
      dimensions: "250x180x170 мм",
      material: "Алюминий, сталь",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd05",
        supplier_name: "ООО БМВ Запчасти",
        supplier_category: "dealer",
        price_per_unit: 28000,
        delivery_days_min: 2,
        delivery_days_max: 8,
      }
    ],

    warehouse_info: {
      current_stock: 15,
      reserved_stock: 0,
      storage_cells: ["B3-24"],
    },

    sales_statistics: {
      total_sold_quantity: 8,
      total_sold_amount: 252000,
      last_30_days_sold: 2,
      last_sale_date: new Date("2024-12-28"),
    },

    creation_date: new Date("2024-03-10"),
    last_updated: new Date("2024-12-28")
  },
  
  {
    _id: "675b2c3d4e5f6789abcdef13",
    part_name: "Комплект тормозных дисков BMW 5-Series F10",
    part_category: "brake_system",

    specifications: {
      manufacturer: "ATE",
      compatibility: ["BMW 5-Series F10", "BMW 6-Series F12"],
      weight_kg: 18.5,
      dimensions: "348x30 мм",
      material: "Высокоуглеродистая сталь",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd05",
        supplier_name: "ООО БМВ Запчасти",
        supplier_category: "dealer",
        price_per_unit: 12000,
        delivery_days_min: 2,
        delivery_days_max: 8,
      }
    ],

    warehouse_info: {
      current_stock: 20,
      reserved_stock: 0,
      storage_cells: ["C1-10"],
    },

    sales_statistics: {
      total_sold_quantity: 10,
      total_sold_amount: 144000,
      last_30_days_sold: 4,
      last_sale_date: new Date("2024-12-26"),
    },

    creation_date: new Date("2024-01-20"),
    last_updated: new Date("2024-12-26")
  },
  
  {
    _id: "675b2c3d4e5f6789abcdef14",
    part_name: "Радиатор охлаждения Volvo XC90",
    part_category: "cooling_system",

    specifications: {
      manufacturer: "Nissens",
      compatibility: ["Volvo XC90"],
      weight_kg: 6.5,
      dimensions: "650x480x32 мм",
      material: "Алюминий",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd10",
        supplier_name: "ООО ВольвоПремиум",
        supplier_category: "dealer",
        price_per_unit: 19000,
        delivery_days_min: 4,
        delivery_days_max: 12,
      }
    ],

    warehouse_info: {
      current_stock: 25,
      reserved_stock: 0,
      storage_cells: ["D2-15"],
    },

    sales_statistics: {
      total_sold_quantity: 5,
      total_sold_amount: 125000,
      last_30_days_sold: 5,
      last_sale_date: new Date("2024-12-30"),
    },

    creation_date: new Date("2024-04-05"),
    last_updated: new Date("2024-12-30")
  },
  
  {
    _id: "675b2c3d4e5f6789abcdef15",
    part_name: "Генератор Toyota Camry XV70",
    part_category: "electrical_system",

    specifications: {
      manufacturer: "Denso",
      compatibility: ["Toyota Camry XV70"],
      weight_kg: 5.2,
      dimensions: "240x160x130 мм",
      material: "Алюминий, медь",
    },

    suppliers_info: [
      {
        supplier_id: "675a1b2c3d4e5f6789abcd09",
        supplier_name: "ООО ТойотаПартс",
        supplier_category: "dealer",
        price_per_unit: 24000,
        delivery_days_min: 2,
        delivery_days_max: 9,
      }
    ],

    warehouse_info: {
      current_stock: 10,
      reserved_stock: 0,
      storage_cells: ["B4-11"],
    },

    sales_statistics: {
      total_sold_quantity: 3,
      total_sold_amount: 87000,
      last_30_days_sold: 3,
      last_sale_date: new Date("2024-12-27"),
    },

    creation_date: new Date("2024-05-18"),
    last_updated: new Date("2024-12-27"),
  }
]; 
