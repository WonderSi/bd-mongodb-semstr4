import { fetchJson } from './config.js';
import { 
  renderParts, 
  renderOrders, 
  renderSales, 
  renderSuppliers, 
  renderWarehouseCells, 
  renderCustomerRequests 
} from './renderers.js';

let partsData = [];
let ordersData = [];
let salesData = [];
let suppliersData = [];
let warehouseCellsData = [];
let customerRequestsData = [];

async function loadAllData() {
  try {
    partsData = await fetchJson("/api/parts");
    ordersData = await fetchJson("/api/orders");
    salesData = await fetchJson("/api/sales");
    suppliersData = await fetchJson("/api/suppliers");
    warehouseCellsData = await fetchJson("/api/warehouse-cells");
    customerRequestsData = await fetchJson("/api/customer-requests");
    
    renderParts(partsData);
    renderOrders(ordersData);
    renderSales(salesData);
    renderSuppliers(suppliersData);
    renderWarehouseCells(warehouseCellsData);
    renderCustomerRequests(customerRequestsData);
    
    return {
      success: true
    };
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    return { 
      success: false, 
      error: error.message 
    };
  }
}

export { 
  loadAllData,
  partsData,
  ordersData,
  salesData,
  suppliersData,
  warehouseCellsData,
  customerRequestsData
}; 
