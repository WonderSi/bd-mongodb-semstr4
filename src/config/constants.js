
const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
};

const SUPPLIER_CATEGORIES = {
  MANUFACTURER: 'manufacturer',
  WHOLESALER: 'wholesaler',
  DISTRIBUTOR: 'distributor',
  RETAILER: 'retailer'
};

const PART_STATUS = {
  IN_STOCK: 'in_stock',
  LOW_STOCK: 'low_stock',
  OUT_OF_STOCK: 'out_of_stock',
  DISCONTINUED: 'discontinued'
};

const CUSTOMER_REQUEST_STATUS = {
  NEW: 'new',
  PROCESSING: 'processing',
  RESOLVED: 'resolved',
  CANCELLED: 'cancelled'
};

module.exports = {
  ORDER_STATUS,
  SUPPLIER_CATEGORIES,
  PART_STATUS,
  CUSTOMER_REQUEST_STATUS
}; 
