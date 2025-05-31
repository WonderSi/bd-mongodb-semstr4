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
    
    request_status: "partially_fulfilled",
    
    expected_supply_info: {
      expected_delivery_date: new Date("2025-01-15"),
      expected_supplier_id: "675a1b2c3d4e5f6789abcd05",
      expected_order_id: "675d4e5f6789abcdef012302"
    },

    priority_level: "medium",
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
    
    priority_level: "urgent",
    created_at: new Date("2024-12-23"),
    updated_at: new Date("2024-12-23")
  }
]; 