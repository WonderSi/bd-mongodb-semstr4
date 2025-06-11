module.exports = [
  {
    _id: "675a6789abcdef0123456801",
    request_number: "REQ-2024-003456",
    request_date: new Date("2024-12-10"),
    
    customer_info: {
      customer_id: "675f6789abcdef0123456702",
      customer_name: "ООО Автосервис Профи",
      phone: "+7-495-987-65-43",
      email: "orders@autoservice-profi.ru"
    },

    requested_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef02",
        part_name: "Масляный фильтр Mercedes E-Class",
        requested_quantity: 5,
        max_unit_price: 1300,
        total_max_amount: 6500,
        fulfillment_info: {
          fulfilled_quantity: 5,
          fulfilled_date: new Date("2024-12-21"),
          sale_id: "675e5f6789abcdef01234502",
          order_id: "675d4e5f6789abcdef012301"
        }
      },
      {
        part_id: "675b2c3d4e5f6789abcdef03",
        part_name: "Стартер BMW X3 F25",
        requested_quantity: 1,
        max_unit_price: 25000,
        total_max_amount: 25000,
        fulfillment_info: {
          fulfilled_quantity: 0,
          fulfilled_date: null,
          sale_id: null,
          order_id: "675d4e5f6789abcdef012302"
        }
      }
    ],
    
    request_summary: {
      total_positions: 2,
      total_quantity: 6,
      total_amount: 31500,
      fulfilled_quantity: 5
    },
    
    request_status: "processing",
    
    expected_supply_info: {
      expected_delivery_date: new Date("2025-01-15"),
      expected_supplier_id: "675a1b2c3d4e5f6789abcd05",
      expected_order_id: "675d4e5f6789abcdef012302"
    },

    created_at: new Date("2024-12-10"),
    updated_at: new Date("2024-12-21")
  },
  
  {
    _id: "675a6789abcdef0123456802",
    request_number: "REQ-2024-003457",
    request_date: new Date("2024-12-23"),
    
    customer_info: {
      customer_id: "675f6789abcdef0123456704",
      customer_name: "Петров С.А.",
      phone: "+7-911-555-77-88",
      email: "petrov.sa@mail.ru"
    },
    
    requested_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef04",
        part_name: "Аккумулятор 12V 74Ah",
        requested_quantity: 1,
        max_unit_price: 8000,
        total_max_amount: 8000,
        fulfillment_info: {
          fulfilled_quantity: 0,
          fulfilled_date: null,
          sale_id: null,
          order_id: null
        }
      }
    ],
    
    request_summary: {
      total_positions: 1,
      total_quantity: 1,
      total_amount: 8000,
      fulfilled_quantity: 0
    },
    
    request_status: "pending",
    
    expected_supply_info: {
      expected_delivery_date: new Date("2024-12-30"),
      expected_supplier_id: "675a1b2c3d4e5f6789abcd06",
      expected_order_id: null
    },
    
    created_at: new Date("2024-12-23"),
    updated_at: new Date("2024-12-23")
  },

  {
    _id: "675a6789abcdef0123456803",
    request_number: "REQ-2024-003458",
    request_date: new Date("2024-12-20"),
    
    customer_info: {
      customer_id: "675f6789abcdef0123456706",
      customer_name: "ООО ТранспортСервис",
      phone: "+7-495-555-77-99",
      email: "info@transport-service.ru"
    },
    
    requested_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef06",
        part_name: "Амортизатор задний Mercedes W213",
        requested_quantity: 2,
        max_unit_price: 18000,
        total_max_amount: 36000,
        fulfillment_info: {
          fulfilled_quantity: 2,
          fulfilled_date: new Date("2024-12-24"),
          sale_id: "675e5f6789abcdef01234505",
          order_id: "675d4e5f6789abcdef012304"
        }
      }
    ],
    
    request_summary: {
      total_positions: 1,
      total_quantity: 2,
      total_amount: 36000,
      fulfilled_quantity: 2
    },
    
    request_status: "fulfilled",
    
    expected_supply_info: {
      expected_delivery_date: new Date("2024-12-22"),
      expected_supplier_id: "675a1b2c3d4e5f6789abcd07",
      expected_order_id: "675d4e5f6789abcdef012304"
    },
    
    created_at: new Date("2024-12-20"),
    updated_at: new Date("2024-12-24")
  },

  {
    _id: "675a6789abcdef0123456804",
    request_number: "REQ-2024-003459",
    request_date: new Date("2024-12-22"),
    
    customer_info: {
      customer_id: "675f6789abcdef0123456707",
      customer_name: "ООО Автостиль",
      phone: "+7-812-345-67-89",
      email: "orders@autostyle.ru"
    },
    
    requested_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef08",
        part_name: "Ремень ГРМ Audi A6 C7",
        requested_quantity: 3,
        max_unit_price: 4000,
        total_max_amount: 12000,
        fulfillment_info: {
          fulfilled_quantity: 0,
          fulfilled_date: null,
          sale_id: null,
          order_id: "675d4e5f6789abcdef012305"
        }
      },
      {
        part_id: "675b2c3d4e5f6789abcdef05",
        part_name: "Свечи зажигания Bosch FR7NPP332",
        requested_quantity: 12,
        max_unit_price: 1200,
        total_max_amount: 14400,
        fulfillment_info: {
          fulfilled_quantity: 0,
          fulfilled_date: null,
          sale_id: null,
          order_id: "675d4e5f6789abcdef012305"
        }
      }
    ],
    
    request_summary: {
      total_positions: 2,
      total_quantity: 15,
      total_amount: 26400,
      fulfilled_quantity: 0
    },
    
    request_status: "pending",
    
    expected_supply_info: {
      expected_delivery_date: new Date("2025-01-05"),
      expected_supplier_id: "675a1b2c3d4e5f6789abcd06",
      expected_order_id: "675d4e5f6789abcdef012305"
    },
    
    created_at: new Date("2024-12-22"),
    updated_at: new Date("2024-12-22")
  },

  {
    _id: "675a6789abcdef0123456805",
    request_number: "REQ-2024-003460",
    request_date: new Date("2024-12-25"),
    
    customer_info: {
      customer_id: "675f6789abcdef0123456708",
      customer_name: "Николаев И.В.",
      phone: "+7-925-123-99-00",
      email: "nikolaev.iv@gmail.com"
    },
    
    requested_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef10",
        part_name: "Фара правая Mercedes C-Class W205",
        requested_quantity: 1,
        max_unit_price: 50000,
        total_max_amount: 50000,
        fulfillment_info: {
          fulfilled_quantity: 0,
          fulfilled_date: null,
          sale_id: null,
          order_id: null
        }
      }
    ],
    
    request_summary: {
      total_positions: 1,
      total_quantity: 1,
      total_amount: 50000,
      fulfilled_quantity: 0
    },
    
    request_status: "pending",
    
    expected_supply_info: {
      expected_delivery_date: new Date("2025-01-10"),
      expected_supplier_id: "675a1b2c3d4e5f6789abcd07",
      expected_order_id: null
    },
    
    created_at: new Date("2024-12-25"),
    updated_at: new Date("2024-12-25")
  },
  
  {
    _id: "675a6789abcdef0123456806",
    request_number: "REQ-2024-003461",
    request_date: new Date("2024-12-27"),
    
    customer_info: {
      customer_id: "675f6789abcdef0123456709",
      customer_name: "Кузнецов Д.М.",
      phone: "+7-921-345-67-89",
      email: "kuznetsov.dm@gmail.com"
    },
    
    requested_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef11",
        part_name: "Комплект сцепления VW Polo Sedan",
        requested_quantity: 1,
        max_unit_price: 15000,
        total_max_amount: 15000,
        fulfillment_info: {
          fulfilled_quantity: 0,
          fulfilled_date: null,
          sale_id: null,
          order_id: null
        }
      }
    ],
    
    request_summary: {
      total_positions: 1,
      total_quantity: 1,
      total_amount: 15000,
      fulfilled_quantity: 0
    },
    
    request_status: "pending",
    
    expected_supply_info: {
      expected_delivery_date: new Date("2025-01-10"),
      expected_supplier_id: "675a1b2c3d4e5f6789abcd06",
      expected_order_id: null
    },
    
    created_at: new Date("2024-12-27"),
    updated_at: new Date("2024-12-27")
  },
  
  {
    _id: "675a6789abcdef0123456807",
    request_number: "REQ-2024-003462",
    request_date: new Date("2024-12-28"),
    
    customer_info: {
      customer_id: "675f6789abcdef0123456710",
      customer_name: "ООО АвтоСпецСервис",
      phone: "+7-495-777-88-99",
      email: "info@autospecservice.ru"
    },
    
    requested_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef12",
        part_name: "Насос гидроусилителя BMW 5-Series F10",
        requested_quantity: 1,
        max_unit_price: 32000,
        total_max_amount: 32000,
        fulfillment_info: {
          fulfilled_quantity: 0,
          fulfilled_date: null,
          sale_id: null,
          order_id: "675d4e5f6789abcdef012307"
        }
      },
      {
        part_id: "675b2c3d4e5f6789abcdef13",
        part_name: "Комплект тормозных дисков BMW 5-Series F10",
        requested_quantity: 2,
        max_unit_price: 15000,
        total_max_amount: 30000,
        fulfillment_info: {
          fulfilled_quantity: 0,
          fulfilled_date: null,
          sale_id: null,
          order_id: "675d4e5f6789abcdef012307"
        }
      }
    ],
    
    request_summary: {
      total_positions: 2,
      total_quantity: 3,
      total_amount: 62000,
      fulfilled_quantity: 0
    },
    
    request_status: "processing",
    
    expected_supply_info: {
      expected_delivery_date: new Date("2025-01-20"),
      expected_supplier_id: "675a1b2c3d4e5f6789abcd05",
      expected_order_id: "675d4e5f6789abcdef012307"
    },
    
    created_at: new Date("2024-12-28"),
    updated_at: new Date("2024-12-29")
  },
  
  {
    _id: "675a6789abcdef0123456808",
    request_number: "REQ-2024-003463",
    request_date: new Date("2024-12-29"),
    
    customer_info: {
      customer_id: "675f6789abcdef0123456703",
      customer_name: "Козлов П.И.",
      phone: "+7-903-555-12-34",
      email: "kozlov.pi@gmail.com"
    },
    
    requested_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef14",
        part_name: "Фильтр топливный Audi Q7",
        requested_quantity: 1,
        max_unit_price: 3500,
        total_max_amount: 3500,
        fulfillment_info: {
          fulfilled_quantity: 1,
          fulfilled_date: new Date("2024-12-30"),
          sale_id: "675e5f6789abcdef01234506",
          order_id: null
        }
      }
    ],
    
    request_summary: {
      total_positions: 1,
      total_quantity: 1,
      total_amount: 3500,
      fulfilled_quantity: 1
    },
    
    request_status: "fulfilled",
    
    expected_supply_info: {
      expected_delivery_date: null,
      expected_supplier_id: null,
      expected_order_id: null
    },
    
    created_at: new Date("2024-12-29"),
    updated_at: new Date("2024-12-30")
  },
  
  {
    _id: "675a6789abcdef0123456809",
    request_number: "REQ-2025-000001",
    request_date: new Date("2025-01-03"),
    
    customer_info: {
      customer_id: "675f6789abcdef0123456711",
      customer_name: "Смирнов А.П.",
      phone: "+7-905-123-45-67",
      email: "smirnov.ap@inbox.ru"
    },
    
    requested_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef15",
        part_name: "Генератор Toyota Camry XV70",
        requested_quantity: 1,
        max_unit_price: 28000,
        total_max_amount: 28000,
        fulfillment_info: {
          fulfilled_quantity: 0,
          fulfilled_date: null,
          sale_id: null,
          order_id: "675d4e5f6789abcdef012308"
        }
      }
    ],
    
    request_summary: {
      total_positions: 1,
      total_quantity: 1,
      total_amount: 28000,
      fulfilled_quantity: 0
    },
    
    request_status: "processing",
    
    expected_supply_info: {
      expected_delivery_date: new Date("2025-01-15"),
      expected_supplier_id: "675a1b2c3d4e5f6789abcd09",
      expected_order_id: "675d4e5f6789abcdef012308"
    },
    
    created_at: new Date("2025-01-03"),
    updated_at: new Date("2025-01-04")
  },
  
  {
    _id: "675a6789abcdef0123456810",
    request_number: "REQ-2025-000002",
    request_date: new Date("2025-01-05"),
    
    customer_info: {
      customer_id: "675f6789abcdef0123456712",
      customer_name: "ООО ПрофиАвто",
      phone: "+7-812-987-65-43",
      email: "orders@profiauto.ru"
    },
    
    requested_items: [
      {
        part_id: "675b2c3d4e5f6789abcdef16",
        part_name: "Радиатор охлаждения Volvo XC90",
        requested_quantity: 2,
        max_unit_price: 22000,
        total_max_amount: 44000,
        fulfillment_info: {
          fulfilled_quantity: 0,
          fulfilled_date: null,
          sale_id: null,
          order_id: "675d4e5f6789abcdef012310"
        }
      },
      {
        part_id: "675b2c3d4e5f6789abcdef17",
        part_name: "Термостат Volvo XC90",
        requested_quantity: 2,
        max_unit_price: 5000,
        total_max_amount: 10000,
        fulfillment_info: {
          fulfilled_quantity: 0,
          fulfilled_date: null,
          sale_id: null,
          order_id: "675d4e5f6789abcdef012310"
        }
      },
      {
        part_id: "675b2c3d4e5f6789abcdef18",
        part_name: "Помпа системы охлаждения Volvo XC90",
        requested_quantity: 1,
        max_unit_price: 12000,
        total_max_amount: 12000,
        fulfillment_info: {
          fulfilled_quantity: 0,
          fulfilled_date: null,
          sale_id: null,
          order_id: "675d4e5f6789abcdef012310"
        }
      }
    ],
    
    request_summary: {
      total_positions: 3,
      total_quantity: 5,
      total_amount: 66000,
      fulfilled_quantity: 0
    },
    
    request_status: "processing",
    
    expected_supply_info: {
      expected_delivery_date: new Date("2025-01-25"),
      expected_supplier_id: "675a1b2c3d4e5f6789abcd10",
      expected_order_id: "675d4e5f6789abcdef012310"
    },
    
    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-06")
  }
]; 