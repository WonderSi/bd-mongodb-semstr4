import { fetchAllOrders, removeOrder, createOrder, updateOrder } from '../api/orders-api.js';
import { fetchAllSuppliers } from '../api/suppliers-api.js';
import { fetchAllParts } from '../api/parts-api.js';
import { renderTable } from '../components/table.js';
import { openModal, closeModal, initModal } from '../components/modal.js';

const orderColumns = [
  { field: 'index', title: '#' },
  { 
    field: 'order_number', 
    title: 'Номер заказа',
    formatter: (value, item) => {
      if (value) return value;
      return item.number || item.id || '-';
    }
  },
  { 
    field: 'order_date', 
    title: 'Дата', 
    formatter: (value, item) => {
      if (value) return formatDate(value);
      return formatDate(item.date || item.created_at || '');
    }
  },
  { 
    field: 'supplier_info.supplier_name', 
    title: 'Поставщик',
    formatter: (value, item) => {
      if (value) return value;
      
      if (item.supplier_info) {
        return item.supplier_info.supplier_name || item.supplier_info.name || '-';
      }
      
      return item.supplier_name || '-';
    }
  },
  { 
    field: 'order_status', 
    title: 'Статус', 
    formatter: (value, item) => {
      if (value) return formatStatus(value);
      return formatStatus(item.status || '');
    }
  },
  { 
    field: 'financial_info.total_amount', 
    title: 'Сумма',
    formatter: (value, item) => {
      if (value !== undefined) return formatCurrency(value);
      
      if (item.financial_info) {
        return formatCurrency(item.financial_info.total_amount || 0);
      }
      
      return formatCurrency(item.total_amount || 0);
    }
  },
  { field: 'actions', title: 'Действия' }
];

function formatDate(dateString) {
  if (!dateString) return '-';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU');
  } catch (e) {
    return dateString;
  }
}

function formatStatus(status) {
  const statusMap = {
    'draft': 'Черновик',
    'placed': 'Размещен',
    'processing': 'В обработке',
    'shipped': 'Отправлен',
    'delivered': 'Доставлен',
    'completed': 'Завершен',
    'cancelled': 'Отменен'
  };
  
  return statusMap[status] || status;
}

function formatCurrency(amount) {
  if (amount === undefined || amount === null) return '-';
  
  return amount.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2
  });
}

export async function loadOrders() {
  try {
    const orders = await fetchAllOrders();

    if (orders && orders.length > 0) {
      console.log('Структура данных заказов:', orders[0]);
    }
    
    renderTable('ordersTable', orders, orderColumns, {
      actions: [
        {
          text: 'Посмотреть',
          className: 'view-btn',
          onClick: handleOrderView
        },
        {
          text: 'Редактировать',
          className: 'edit-btn',
          onClick: handleOrderEdit
        },
        {
          text: 'Удалить',
          className: 'delete-btn',
          onClick: handleOrderDelete
        }
      ]
    });
  } catch (error) {
    console.error('Ошибка при загрузке заказов:', error);
    alert('Не удалось загрузить заказы. Попробуйте позже.');
  }
}

async function handleOrderView(order) {

  const url = `order.html?id=${order._id}`;
  console.log('Открывается URL:', url);
  
  window.location.href = url;
}

async function handleOrderEdit(order) {

  const url = `edit-order.html?id=${order._id}`;
  console.log('Открывается URL для редактирования:', url);

  window.location.href = url;
}

async function handleOrderDelete(order) {
  if (!confirm(`Вы действительно хотите удалить заказ ${order.order_number}?`)) {
    return;
  }
  
  try {
    await removeOrder(order._id);
    await loadOrders();
  } catch (error) {
    console.error('Ошибка при удалении заказа:', error);
    alert('Не удалось удалить заказ. Попробуйте позже.');
  }
}

export async function showOrderForm() {
  try {

    const suppliers = await fetchAllSuppliers();
    const parts = await fetchAllParts();

    window.orderFormData = {
      suppliers,
      parts,
      orderItems: [],
      totalAmount: 0
    };

    openModal('createOrderModal');

    const supplierSelect = document.getElementById('orderSupplierSelect');
    supplierSelect.innerHTML = '<option value="">Выберите поставщика...</option>';
    
    suppliers.forEach(supplier => {
      const option = document.createElement('option');
      option.value = supplier._id;
      option.textContent = supplier.supplier_name;
      option.dataset.category = supplier.supplier_category || '';
      supplierSelect.appendChild(option);
    });

    const partSelect = document.getElementById('partSelect');
    partSelect.innerHTML = '<option value="">Выберите запчасть...</option>';
    
    parts.forEach(part => {
      const option = document.createElement('option');
      option.value = part._id;
      option.textContent = `${part.part_name} (${part.specifications?.manufacturer || 'Неизвестно'})`;
      option.dataset.price = part.price || 1000;
      partSelect.appendChild(option);
    });

    document.getElementById('orderNumber').value = 'ORD-' + Date.now().toString().slice(-6);

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('orderDate').value = today;

    document.getElementById('orderItemsList').innerHTML = '';
    document.getElementById('orderTotal').textContent = 'Общая сумма: 0.00 ₽';
  } catch (error) {
    console.error('Ошибка при открытии формы заказа:', error);
    alert('Не удалось загрузить данные для формы. Попробуйте позже.');
  }
}

export function initOrdersPage() {
  initModal('createOrderModal');
  
  const createOrderBtn = document.getElementById('createOrderBtn');
  if (createOrderBtn) {
    createOrderBtn.addEventListener('click', showOrderForm);
  }

  const addItemBtn = document.getElementById('addItemBtn');
  if (addItemBtn) {
    addItemBtn.addEventListener('click', addOrderItem);
  }

  const saveOrderBtn = document.getElementById('saveOrderBtn');
  if (saveOrderBtn) {
    saveOrderBtn.addEventListener('click', saveOrder);
  }

  const partSelect = document.getElementById('partSelect');
  if (partSelect) {
    partSelect.addEventListener('change', updateItemPrice);
  }

  const supplierSelect = document.getElementById('orderSupplierSelect');
  if (supplierSelect) {
    supplierSelect.addEventListener('change', updateSupplierCategory);
  }
}

function updateSupplierCategory() {
  const supplierSelect = document.getElementById('orderSupplierSelect');
  const supplierCategoryInput = document.getElementById('supplierCategory');
  
  if (!supplierSelect || !supplierCategoryInput) return;
  
  if (supplierSelect.value) {
    const selectedOption = supplierSelect.options[supplierSelect.selectedIndex];
    supplierCategoryInput.value = selectedOption.dataset.category || '';
  } else {
    supplierCategoryInput.value = '';
  }
}

function updateItemPrice() {
  const partSelect = document.getElementById('partSelect');
  const itemPrice = document.getElementById('itemPrice');
  
  if (!partSelect || !itemPrice) return;
  
  if (partSelect.value) {
    const selectedOption = partSelect.options[partSelect.selectedIndex];
    const defaultPrice = parseFloat(selectedOption.dataset.price);
    itemPrice.value = defaultPrice.toFixed(2);
  } else {
    itemPrice.value = '';
  }
}

function addOrderItem() {
  const partSelect = document.getElementById('partSelect');
  const itemQuantity = document.getElementById('itemQuantity');
  const itemPrice = document.getElementById('itemPrice');
  
  if (!partSelect || !itemQuantity || !itemPrice) return;
  
  const partId = partSelect.value;
  const quantity = parseInt(itemQuantity.value);
  const price = parseFloat(itemPrice.value);
  
  if (!partId || !quantity || quantity <= 0 || !price || price <= 0) {
    alert('Выберите запчасть, укажите количество и цену');
    return;
  }
  
  const selectedOption = partSelect.options[partSelect.selectedIndex];
  const partName = selectedOption.textContent;
  
  const orderItemsList = document.getElementById('orderItemsList');
  
  const itemElement = document.createElement('div');
  itemElement.className = 'order-item';
  itemElement.dataset.partId = partId;
  itemElement.dataset.quantity = quantity;
  itemElement.dataset.price = price;
  
  itemElement.innerHTML = `
    <span class="item-name">${partName}</span>
    <span class="item-quantity">Кол-во: ${quantity}</span>
    <span class="item-price">Цена: ${price.toFixed(2)} ₽</span>
    <span class="item-total">Сумма: ${(price * quantity).toFixed(2)} ₽</span>
    <button type="button" class="remove-item">×</button>
  `;
  
  itemElement.querySelector('.remove-item').addEventListener('click', function() {
    itemElement.remove();
    updateOrderTotal();
  });
  
  orderItemsList.appendChild(itemElement);
  
  partSelect.value = '';
  itemQuantity.value = '1';
  itemPrice.value = '';
  
  updateOrderTotal();
}

function updateOrderTotal() {
  const orderItems = document.querySelectorAll('.order-item');
  let total = 0;
  
  orderItems.forEach(item => {
    const price = parseFloat(item.dataset.price);
    const quantity = parseInt(item.dataset.quantity);
    total += price * quantity;
  });
  
  document.getElementById('orderTotal').textContent = `Общая сумма: ${total.toFixed(2)} ₽`;
  document.getElementById('orderSubtotalAmount').value = total;
}

async function saveOrder() {
  try {
    const orderNumber = document.getElementById('orderNumber').value;
    const supplierId = document.getElementById('orderSupplierSelect').value;
    const supplierName = document.getElementById('orderSupplierSelect').options[
      document.getElementById('orderSupplierSelect').selectedIndex
    ].textContent;
    const supplierCategory = document.getElementById('supplierCategory').value;
    const orderDate = document.getElementById('orderDate').value;
    const orderStatus = document.getElementById('orderStatus').value;
    const priorityLevel = document.getElementById('priorityLevel').value;
    const managerName = document.getElementById('managerName').value;
    const subtotalAmount = parseFloat(document.getElementById('orderSubtotalAmount').value);

    if (!orderNumber || !supplierId || !orderDate || !orderStatus) {
      alert('Заполните все обязательные поля');
      return;
    }
    
    const orderItems = [];
    document.querySelectorAll('.order-item').forEach(item => {
      orderItems.push({
        part_id: item.dataset.partId,
        ordered_quantity: parseInt(item.dataset.quantity),
        unit_price: parseFloat(item.dataset.price),
        total: parseFloat(item.dataset.price) * parseInt(item.dataset.quantity)
      });
    });
    
    if (orderItems.length === 0) {
      alert('Добавьте хотя бы один товар в заказ');
      return;
    }
    
    const orderData = {
      order_number: orderNumber,
      order_date: orderDate,
      order_status: orderStatus,
      priority_level: priorityLevel,
      manager_name: managerName,
      supplier_info: {
        supplier_id: supplierId,
        supplier_name: supplierName,
        supplier_category: supplierCategory
      },
      order_items: orderItems,
      financial_info: {
        subtotal_amount: subtotalAmount,
        total_amount: subtotalAmount
      }
    };
    
    const result = await createOrder(orderData);
    
    closeModal('createOrderModal');
    
    await loadOrders();
    
    alert('Заказ успешно создан');
  } catch (error) {
    console.error('Ошибка при сохранении заказа:', error);
    alert(`Ошибка при сохранении: ${error.message}`);
  }
} 
