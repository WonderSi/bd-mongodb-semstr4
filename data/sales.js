module.exports = [
  {
    _id: "675e5f6789abcdef01234501",
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
          fulfilled_quantity: 0,
          fulfilled_date: null
        }
      }
    ],

    financial_info: {
      subtotal_amount: 5200,
      discount_amount: 200,
      total_amount: 5900,
      total_profit: 500,
      currency: "RUB",
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
          fulfilled_quantity: 5,
          fulfilled_date: new Date("2024-12-21")
        }
      }
    ],

    financial_info: {
      subtotal_amount: 6000,
      discount_amount: 300,
      total_amount: 6726,
      total_profit: 1450,
      currency: "RUB",
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
          fulfilled_quantity: 0,
          fulfilled_date: null
        }
      }
    ],

    financial_info: {
      subtotal_amount: 5000,
      discount_amount: 0,
      total_amount: 5900,
      total_profit: 0,
      currency: "RUB",
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
  }
]; 