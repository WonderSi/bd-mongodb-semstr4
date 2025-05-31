module.exports = [
  {
    _id: "675a1b2c3d4e5f6789abcd01",
    supplier_name: "ООО Автодетали Премиум",
    supplier_category: "firm",
    contact_info: {
      phone: "+7-495-123-45-67",
      email: "sales@autoparts-premium.ru",
      address: "Москва, ул. Промышленная, 15"
    },
    has_guarantee: true,
    provides_discounts: true,
    has_full_documents: true,
    contract_based: true,
    reliability_rating: 9.5,
    delivery_terms: {
      min_days: 3,
      max_days: 10,
      delivery_cost: 50
    },
    total_orders_count: 145,
    total_orders_amount: 2500000,
    is_active: true
  },

  {
    _id: "675a1b2c3d4e5f6789abcd04",
    supplier_name: "ИП Иванов А.С.",
    supplier_category: "small_production",
    contact_info: {
      phone: "+7-912-345-67-89",
      email: "ivanov.parts@mail.ru",
      address: "Нижний Новгород, ул. Заводская, 3"
    },
    has_guarantee: false,
    provides_discounts: false,
    has_full_documents: false,
    contract_based: false,
    reliability_rating: 6.5,
    delivery_terms: {
      min_days: 1,
      max_days: 5,
      delivery_cost: 30
    },
    total_orders_count: 23,
    total_orders_amount: 180000,
    is_active: true
  },

  {
    _id: "675a1b2c3d4e5f6789abcd05",
    supplier_name: "ООО БМВ Запчасти",
    supplier_category: "dealer",
    contact_info: {
      phone: "+7-495-456-78-90",
      email: "info@bmw-parts.ru",
      address: "Москва, ул. Автомобильная, 25"
    },
    has_guarantee: true,
    provides_discounts: true,
    has_full_documents: true,
    contract_based: true,
    reliability_rating: 9.8,
    delivery_terms: {
      min_days: 2,
      max_days: 8,
      delivery_cost: 45
    },
    total_orders_count: 89,
    total_orders_amount: 1800000,
    is_active: true
  }
]; 