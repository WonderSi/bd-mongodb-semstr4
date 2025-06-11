module.exports = [
  {
    _id: "675e5f6789abcdef01234501",
    sale_number: "SALE-2024-005678",
    sale_date: new Date("2024-12-20"),
    
    customer_info: {
      customer_id: "675f6789abcdef0123456701",
      customer_name: "Сидоров А.В.",
      phone: "+7-911-123-45-67",
      email: "sidorov@mail.ru"
    },

    sold_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef01",
        part_name: "Тормозные колодки передние BMW X5",
        sold_quantity: 1,
        unit_price: 5200,
        purchase_price: 4500,
        total_sale_price: 5200,
        profit_per_item: 700,
        total_profit: 700,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd01",
          supplier_name: "ООО Автодетали Премиум"
        },
        storage_cell: "A1-15",
        pre_order_info: {
          request_id: null,
          fulfilled_date: null
        }
      }
    ],

    financial_info: {
      subtotal_amount: 5200,
      discount_amount: 200,
      total_amount: 5900,
      total_profit: 500,
      payment_method: "card",
      payment_status: "completed"
    },

    cashier_info: {
      cashier_id: null,
      cashier_name: "Иванова М.С.",
      cash_register_number: "KASSA-01",
      receipt_number: "0001234567"
    },

    return_info: {
      has_returns: false,
      return_date: null,
      return_reason: null,
      return_amount: 0,
      items_returned: []
    },

    created_at: new Date("2024-12-20"),
    updated_at: new Date("2024-12-20")
  },

  {
    _id: "675e5f6789abcdef01234502",
    sale_number: "SALE-2024-005679",
    sale_date: new Date("2024-12-21"),

    customer_info: {
      customer_id: "675f6789abcdef0123456702",
      customer_name: "ООО Автосервис Профи",
      phone: "+7-495-987-65-43",
      email: "orders@autoservice-profi.ru"
    },

    sold_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef02",
        part_name: "Масляный фильтр Mercedes E-Class",
        sold_quantity: 5,
        unit_price: 1200,
        purchase_price: 850,
        total_sale_price: 6000,
        profit_per_item: 350,
        total_profit: 1750,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd01",
          supplier_name: "ООО Автодетали Премиум"
        },
        storage_cell: "B2-08",
        pre_order_info: {
          request_id: "675a6789abcdef0123456801",
          fulfilled_date: new Date("2024-12-21")
        }
      }
    ],

    financial_info: {
      subtotal_amount: 6000,
      discount_amount: 300,
      total_amount: 6726,
      total_profit: 1450,
      payment_method: "transfer",
      payment_status: "completed"
    },

    cashier_info: {
      cashier_id: null,
      cashier_name: "Петрова О.А.",
      cash_register_number: "KASSA-02",
      receipt_number: "0001234568"
    },

    return_info: {
      has_returns: false,
      return_date: null,
      return_reason: null,
      return_amount: 0,
      items_returned: []
    },

    created_at: new Date("2024-12-21"),
    updated_at: new Date("2024-12-21")
  },

  {
    _id: "675e5f6789abcdef01234503",
    sale_number: "SALE-2024-005680",
    sale_date: new Date("2024-12-18"),

    customer_info: {
      customer_id: "675f6789abcdef0123456703",
      customer_name: "Козлов П.И.",
      phone: "+7-903-555-12-34",
      email: "kozlov.pi@gmail.com"
    },

    sold_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef01",
        part_name: "Тормозные колодки передние BMW X5",
        sold_quantity: 1,
        unit_price: 5000,
        purchase_price: 4500,
        total_sale_price: 5000,
        profit_per_item: 500,
        total_profit: 0,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd04",
          supplier_name: "ИП Иванов А.С."
        },
        storage_cell: "A1-16",
        pre_order_info: {
          request_id: null,
          fulfilled_date: null
        }
      }
    ],

    financial_info: {
      subtotal_amount: 5000,
      discount_amount: 0,
      total_amount: 5900,
      total_profit: 0,
      payment_method: "cash",
      payment_status: "refunded"
    },

    cashier_info: {
      cashier_id: null,
      cashier_name: "Иванова М.С.",
      cash_register_number: "KASSA-01",
      receipt_number: "0001234569"
    },

    return_info: {
      has_returns: true,
      return_date: new Date("2024-12-22"),
      return_reason: "defect",
      return_amount: 5900,
      items_returned: [
        {
          part_id: "675b2c3d4e5f6789abcdef01",
          returned_quantity: 1
        }
      ]
    },

    created_at: new Date("2024-12-18"),
    updated_at: new Date("2024-12-22")
  },

  {
    _id: "675e5f6789abcdef01234504",
    sale_number: "SALE-2024-005681",
    sale_date: new Date("2024-12-23"),

    customer_info: {
      customer_id: "675f6789abcdef0123456705",
      customer_name: "Семенов Р.К.",
      phone: "+7-916-789-45-63",
      email: "semenov.rk@yandex.ru"
    },

    sold_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef05",
        part_name: "Свечи зажигания Bosch FR7NPP332",
        sold_quantity: 4,
        unit_price: 1200,
        purchase_price: 950,
        total_sale_price: 4800,
        profit_per_item: 250,
        total_profit: 1000,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd01",
          supplier_name: "ООО Автодетали Премиум"
        },
        storage_cell: "B2-08",
        pre_order_info: {
          request_id: null,
          fulfilled_date: null
        }
      },
      {
        part_id: "675b2c3d4e5f6789abcdef07",
        part_name: "Салонный фильтр BMW X5 G05",
        sold_quantity: 1,
        unit_price: 2500,
        purchase_price: 2200,
        total_sale_price: 2500,
        profit_per_item: 300,
        total_profit: 300,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd05",
          supplier_name: "ООО БМВ Запчасти"
        },
        storage_cell: "A1-16",
        pre_order_info: {
          request_id: null,
          fulfilled_date: null
        }
      }
    ],

    financial_info: {
      subtotal_amount: 7300,
      discount_amount: 0,
      total_amount: 8614,
      total_profit: 1300,
      payment_method: "card",
      payment_status: "completed"
    },

    cashier_info: {
      cashier_id: null,
      cashier_name: "Иванова М.С.",
      cash_register_number: "KASSA-01",
      receipt_number: "0001234570"
    },

    return_info: {
      has_returns: false,
      return_date: null,
      return_reason: null,
      return_amount: 0,
      items_returned: []
    },

    created_at: new Date("2024-12-23"),
    updated_at: new Date("2024-12-23")
  },

  {
    _id: "675e5f6789abcdef01234505",
    sale_number: "SALE-2024-005682",
    sale_date: new Date("2024-12-24"),

    customer_info: {
      customer_id: "675f6789abcdef0123456706",
      customer_name: "ООО ТранспортСервис",
      phone: "+7-495-555-77-99",
      email: "info@transport-service.ru"
    },

    sold_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef09",
        part_name: "Диск тормозной Lexus RX",
        sold_quantity: 2,
        unit_price: 7500,
        purchase_price: 6500,
        total_sale_price: 15000,
        profit_per_item: 1000,
        total_profit: 2000,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd01",
          supplier_name: "ООО Автодетали Премиум"
        },
        storage_cell: "C2-08",
        pre_order_info: {
          request_id: null,
          fulfilled_date: null
        }
      },
      {
        part_id: "675b2c3d4e5f6789abcdef06",
        part_name: "Амортизатор задний Mercedes W213",
        sold_quantity: 2,
        unit_price: 17000,
        purchase_price: 15000,
        total_sale_price: 34000,
        profit_per_item: 2000,
        total_profit: 4000,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd07",
          supplier_name: "ООО Мерседес Партс"
        },
        storage_cell: "B3-22",
        pre_order_info: {
          request_id: "675a6789abcdef0123456803",
          fulfilled_date: new Date("2024-12-24")
        }
      }
    ],

    financial_info: {
      subtotal_amount: 49000,
      discount_amount: 4900,
      total_amount: 52012,
      total_profit: 6000,
      payment_method: "transfer",
      payment_status: "completed"
    },

    cashier_info: {
      cashier_id: null,
      cashier_name: "Петрова О.А.",
      cash_register_number: "KASSA-02",
      receipt_number: "0001234571"
    },

    return_info: {
      has_returns: false,
      return_date: null,
      return_reason: null,
      return_amount: 0,
      items_returned: []
    },

    created_at: new Date("2024-12-24"),
    updated_at: new Date("2024-12-24")
  },
  
  {
    _id: "675e5f6789abcdef01234506",
    sale_number: "SALE-2024-005683",
    sale_date: new Date("2024-12-30"),

    customer_info: {
      customer_id: "675f6789abcdef0123456703",
      customer_name: "Козлов П.И.",
      phone: "+7-903-555-12-34",
      email: "kozlov.pi@gmail.com"
    },

    sold_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef14",
        part_name: "Фильтр топливный Audi Q7",
        sold_quantity: 1,
        unit_price: 3200,
        purchase_price: 2800,
        total_sale_price: 3200,
        profit_per_item: 400,
        total_profit: 400,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd04",
          supplier_name: "ИП Иванов А.С."
        },
        storage_cell: "D1-03",
        pre_order_info: {
          request_id: "675a6789abcdef0123456808",
          fulfilled_date: new Date("2024-12-30")
        }
      }
    ],

    financial_info: {
      subtotal_amount: 3200,
      discount_amount: 0,
      total_amount: 3776,
      total_profit: 400,
      payment_method: "cash",
      payment_status: "completed"
    },

    cashier_info: {
      cashier_id: null,
      cashier_name: "Иванова М.С.",
      cash_register_number: "KASSA-01",
      receipt_number: "0001234572"
    },

    return_info: {
      has_returns: false,
      return_date: null,
      return_reason: null,
      return_amount: 0,
      items_returned: []
    },

    created_at: new Date("2024-12-30"),
    updated_at: new Date("2024-12-30")
  },
  
  {
    _id: "675e5f6789abcdef01234507",
    sale_number: "SALE-2025-000001",
    sale_date: new Date("2025-01-10"),

    customer_info: {
      customer_id: "675f6789abcdef0123456704",
      customer_name: "Петров С.А.",
      phone: "+7-911-555-77-88",
      email: "petrov.sa@mail.ru"
    },

    sold_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef20",
        part_name: "Комплект сцепления Audi A4 B8",
        sold_quantity: 1,
        unit_price: 21000,
        purchase_price: 18500,
        total_sale_price: 21000,
        profit_per_item: 2500,
        total_profit: 2500,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd01",
          supplier_name: "ООО Автодетали Премиум"
        },
        storage_cell: "B1-12",
        pre_order_info: {
          request_id: null,
          fulfilled_date: null
        }
      },
      {
        part_id: "675b2c3d4e5f6789abcdef21",
        part_name: "Маховик Audi A4 B8",
        sold_quantity: 1,
        unit_price: 25000,
        purchase_price: 22000,
        total_sale_price: 25000,
        profit_per_item: 3000,
        total_profit: 3000,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd01",
          supplier_name: "ООО Автодетали Премиум"
        },
        storage_cell: "B1-13",
        pre_order_info: {
          request_id: null,
          fulfilled_date: null
        }
      }
    ],

    financial_info: {
      subtotal_amount: 46000,
      discount_amount: 2000,
      total_amount: 52000,
      total_profit: 5500,
      payment_method: "card",
      payment_status: "completed"
    },

    cashier_info: {
      cashier_id: null,
      cashier_name: "Петрова О.А.",
      cash_register_number: "KASSA-02",
      receipt_number: "0001234580"
    },

    return_info: {
      has_returns: false,
      return_date: null,
      return_reason: null,
      return_amount: 0,
      items_returned: []
    },

    created_at: new Date("2025-01-10"),
    updated_at: new Date("2025-01-10")
  },
  
  {
    _id: "675e5f6789abcdef01234508",
    sale_number: "SALE-2025-000002",
    sale_date: new Date("2025-01-12"),

    customer_info: {
      customer_id: "675f6789abcdef0123456707",
      customer_name: "ООО Автостиль",
      phone: "+7-812-345-67-89",
      email: "orders@autostyle.ru"
    },

    sold_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef09",
        part_name: "Диск тормозной Lexus RX",
        sold_quantity: 4,
        unit_price: 7200,
        purchase_price: 5800,
        total_sale_price: 28800,
        profit_per_item: 1400,
        total_profit: 5600,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd04",
          supplier_name: "ИП Иванов А.С."
        },
        storage_cell: "C2-08",
        pre_order_info: {
          request_id: null,
          fulfilled_date: null
        }
      }
    ],

    financial_info: {
      subtotal_amount: 28800,
      discount_amount: 1440,
      total_amount: 32332.8,
      total_profit: 5600,
      payment_method: "transfer",
      payment_status: "completed"
    },

    cashier_info: {
      cashier_id: null,
      cashier_name: "Петрова О.А.",
      cash_register_number: "KASSA-02",
      receipt_number: "0001234582"
    },

    return_info: {
      has_returns: false,
      return_date: null,
      return_reason: null,
      return_amount: 0,
      items_returned: []
    },

    created_at: new Date("2025-01-12"),
    updated_at: new Date("2025-01-12")
  },
  
  {
    _id: "675e5f6789abcdef01234509",
    sale_number: "SALE-2025-000003",
    sale_date: new Date("2025-01-15"),

    customer_info: {
      customer_id: "675f6789abcdef0123456709",
      customer_name: "Кузнецов Д.М.",
      phone: "+7-921-345-67-89",
      email: "kuznetsov.dm@gmail.com"
    },

    sold_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef11",
        part_name: "Комплект сцепления VW Polo Sedan",
        sold_quantity: 1,
        unit_price: 18000,
        purchase_price: 15000,
        total_sale_price: 18000,
        profit_per_item: 3000,
        total_profit: 3000,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd06",
          supplier_name: "ООО АвтоТехИмпорт"
        },
        storage_cell: "B2-08",
        pre_order_info: {
          request_id: "675a6789abcdef0123456806",
          fulfilled_date: new Date("2025-01-15")
        }
      },
      {
        part_id: "675b2c3d4e5f6789abcdef04",
        part_name: "Аккумулятор 12V 74Ah",
        sold_quantity: 1,
        unit_price: 7500,
        purchase_price: 6200,
        total_sale_price: 7500,
        profit_per_item: 1300,
        total_profit: 1300,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd04",
          supplier_name: "ИП Иванов А.С."
        },
        storage_cell: "C2-08",
        pre_order_info: {
          request_id: null,
          fulfilled_date: null
        }
      }
    ],

    financial_info: {
      subtotal_amount: 25500,
      discount_amount: 500,
      total_amount: 29500,
      total_profit: 4300,
      payment_method: "card",
      payment_status: "completed"
    },

    cashier_info: {
      cashier_id: null,
      cashier_name: "Иванова М.С.",
      cash_register_number: "KASSA-01",
      receipt_number: "0001234585"
    },

    return_info: {
      has_returns: false,
      return_date: null,
      return_reason: null,
      return_amount: 0,
      items_returned: []
    },

    created_at: new Date("2025-01-15"),
    updated_at: new Date("2025-01-15")
  },
  
  {
    _id: "675e5f6789abcdef01234510",
    sale_number: "SALE-2025-000004",
    sale_date: new Date("2025-01-18"),

    customer_info: {
      customer_id: "675f6789abcdef0123456710",
      customer_name: "ООО АвтоСпецСервис",
      phone: "+7-495-777-88-99",
      email: "info@autospecservice.ru"
    },

    sold_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef01",
        part_name: "Тормозные колодки передние BMW X5",
        sold_quantity: 2,
        unit_price: 5100,
        purchase_price: 4500,
        total_sale_price: 10200,
        profit_per_item: 600,
        total_profit: 1200,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd01",
          supplier_name: "ООО Автодетали Премиум"
        },
        storage_cell: "A1-16",
        pre_order_info: {
          request_id: null,
          fulfilled_date: null
        }
      },
      {
        part_id: "675b2c3d4e5f6789abcdef02",
        part_name: "Масляный фильтр Mercedes E-Class",
        sold_quantity: 3,
        unit_price: 1100,
        purchase_price: 850,
        total_sale_price: 3300,
        profit_per_item: 250,
        total_profit: 750,
        supplier_info: {
          supplier_id: "675a1b2c3d4e5f6789abcd01",
          supplier_name: "ООО Автодетали Премиум"
        },
        storage_cell: "B2-09",
        pre_order_info: {
          request_id: null,
          fulfilled_date: null
        }
      }
    ],

    financial_info: {
      subtotal_amount: 13500,
      discount_amount: 1350,
      total_amount: 14337,
      total_profit: 1950,
      payment_method: "transfer",
      payment_status: "completed"
    },

    cashier_info: {
      cashier_id: null,
      cashier_name: "Петрова О.А.",
      cash_register_number: "KASSA-02",
      receipt_number: "0001234590"
    },

    return_info: {
      has_returns: false,
      return_date: null,
      return_reason: null,
      return_amount: 0,
      items_returned: []
    },

    created_at: new Date("2025-01-18"),
    updated_at: new Date("2025-01-18")
  }
]; 
