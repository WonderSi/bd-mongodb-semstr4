import { inspectObject, formatCategory } from './config.js';

const partsTable = document.getElementById("partsTable");
const ordersTable = document.getElementById("ordersTable");
const salesTable = document.getElementById("salesTable");
const suppliersTable = document.getElementById("suppliersTable");
const warehouseCellsTable = document.getElementById("warehouseCellsTable");
const customerRequestsTable = document.getElementById("customerRequestsTable");

const partsTbody = partsTable.querySelector("tbody");
const ordersTbody = ordersTable.querySelector("tbody");
const salesTbody = salesTable.querySelector("tbody");
const suppliersTbody = suppliersTable.querySelector("tbody");
const warehouseCellsTbody = warehouseCellsTable.querySelector("tbody");
const customerRequestsTbody = customerRequestsTable.querySelector("tbody");

function renderParts(list) {
  partsTbody.innerHTML = "";
  console.log('Parts data:', list);
  
  if (list.length === 0) {
    partsTbody.innerHTML = '<tr><td colspan="6">Нет данных</td></tr>';
    return;
  }

  if (list.length > 0) {
    inspectObject(list[0], 'Part');
  }
  
  list.forEach((part, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${part.part_name || '-'}</td>
      <td>${part.part_category || '-'}</td>
      <td>${part.specifications?.manufacturer || '-'}</td>
      <td>${part.specifications?.material || '-'}</td>
      <td>${part.warehouse_info?.current_stock || '0'}</td>
    `;
    partsTbody.appendChild(tr);
  });
}

function renderOrders(list) {
  ordersTbody.innerHTML = "";
  console.log('Orders data:', list);
  
  if (list.length === 0) {
    ordersTbody.innerHTML = '<tr><td colspan="6">Нет данных</td></tr>';
    return;
  }

  if (list.length > 0) {
    inspectObject(list[0], 'Order');
  }
  
  list.forEach((order, i) => {
    const tr = document.createElement("tr");
    const orderDate = order.order_date ? new Date(order.order_date).toLocaleDateString() : '-';
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${order.order_number || '-'}</td>
      <td>${orderDate}</td>
      <td>${order.supplier_info?.supplier_name || '-'}</td>
      <td>${order.order_status || '-'}</td>
      <td>${order.financial_info?.total_amount ? order.financial_info.total_amount.toFixed(2) + ' ₽' : '-'}</td>
    `;
    ordersTbody.appendChild(tr);
  });
}

function renderSales(list) {
  salesTbody.innerHTML = "";
  console.log('Sales data:', list);
  
  if (list.length === 0) {
    salesTbody.innerHTML = '<tr><td colspan="5">Нет данных</td></tr>';
    return;
  }

  if (list.length > 0) {
    inspectObject(list[0], 'Sale');
  }
  
  list.forEach((sale, i) => {
    const tr = document.createElement("tr");
    const saleDate = sale.sale_date ? new Date(sale.sale_date).toLocaleDateString() : '-';
    const saleNumber = sale._id ? sale._id.substring(sale._id.length - 6) : '-';
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${saleNumber}</td>
      <td>${saleDate}</td>
      <td>${sale.customer_info?.customer_name || '-'}</td>
      <td>${sale.financial_info?.total_amount ? sale.financial_info.total_amount.toFixed(2) + ' ₽' : '-'}</td>
    `;
    salesTbody.appendChild(tr);
  });
}

function renderSuppliers(list) {
  suppliersTbody.innerHTML = "";
  console.log('Suppliers data:', list);
  
  if (list.length === 0) {
    suppliersTbody.innerHTML = '<tr><td colspan="6">Нет данных</td></tr>';
    return;
  }

  if (list.length > 0) {
    inspectObject(list[0], 'Supplier');
  }
  
  list.forEach((supplier, i) => {
    const tr = document.createElement("tr");
    
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${supplier.supplier_name || '-'}</td>
      <td>${formatCategory(supplier.supplier_category)}</td>
      <td>${supplier.contact_info?.phone || '-'}</td>
      <td>${supplier.contact_info?.email || '-'}</td>
      <td>${supplier.contact_info?.address || '-'}</td>
    `;
    suppliersTbody.appendChild(tr);
  });
}

function renderWarehouseCells(list) {
  warehouseCellsTbody.innerHTML = "";
  console.log('Warehouse cells data:', list);
  
  if (list.length === 0) {
    warehouseCellsTbody.innerHTML = '<tr><td colspan="5">Нет данных</td></tr>';
    return;
  }

  if (list.length > 0) {
    inspectObject(list[0], 'WarehouseCell');
  }
  
  list.forEach((cell, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${cell.cell_number || '-'}</td>
      <td>${cell.cell_characteristics?.zone || '-'}</td>
      <td>${cell.cell_status || '-'}</td>
      <td>${cell.cell_characteristics?.max_capacity_kg ? cell.cell_characteristics.max_capacity_kg + ' кг' : '-'}</td>
    `;
    warehouseCellsTbody.appendChild(tr);
  });
}

function renderCustomerRequests(list) {
  customerRequestsTbody.innerHTML = "";
  console.log('Customer requests data:', list);
  
  if (list.length === 0) {
    customerRequestsTbody.innerHTML = '<tr><td colspan="6">Нет данных</td></tr>';
    return;
  }

  if (list.length > 0) {
    inspectObject(list[0], 'CustomerRequest');
  }
  
  list.forEach((request, i) => {
    const tr = document.createElement("tr");
    const requestDate = request.request_date ? new Date(request.request_date).toLocaleDateString() : '-';
    const requestId = request.request_number || (request._id ? request._id.substring(request._id.length - 6) : '-');
    const partName = request.requested_items && request.requested_items.length > 0 
      ? request.requested_items[0].part_name || '-' 
      : '-';
    
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${requestId}</td>
      <td>${requestDate}</td>
      <td>${request.customer_info?.customer_name || '-'}</td>
      <td>${partName}</td>
      <td>${request.request_status || '-'}</td>
    `;
    customerRequestsTbody.appendChild(tr);
  });
}

export {
  renderParts,
  renderOrders,
  renderSales,
  renderSuppliers,
  renderWarehouseCells,
  renderCustomerRequests
}; 
