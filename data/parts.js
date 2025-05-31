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
        currency: "RUB",
        delivery_days_min: 3,
        delivery_days_max: 7,
      },
      {
        supplier_id: "675a1b2c3d4e5f6789abcd04",
        supplier_name: "ИП Иванов А.С.",
        supplier_category: "small_production",
        price_per_unit: 3200,
        currency: "RUB",
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

    defect_info: {
      total_defects: 3,
      defect_rate_percent: 1.3,
      last_defect_date: new Date("2024-10-15"),
      defect_suppliers: ["675a1b2c3d4e5f6789abcd04"],
    },

    creation_date: new Date("2022-03-15"),
    last_updated: new Date("2024-12-25"),
    is_seasonal: false,
    description: "Высококачественные керамические тормозные колодки",
    tags: ["BMW", "тормоза", "передние", "керамика"],
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
        currency: "RUB",
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

    defect_info: {
      total_defects: 0,
      defect_rate_percent: 0,
      last_defect_date: null,
      defect_suppliers: [],
    },

    creation_date: new Date("2022-06-10"),
    last_updated: new Date("2024-12-25"),
    is_seasonal: false,
    description: "Оригинальный масляный фильтр для Mercedes E-Class",
    tags: ["Mercedes", "масляный фильтр", "двигатель", "Mann"],
  },
]; 