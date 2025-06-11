import { fetchAllCustomerRequests, removeCustomerRequest, updateCustomerRequest } from '../api/customer-requests-api.js';
import { renderTable } from '../components/table.js';
import { formatDate } from '../utils/formatter.js';
import { REQUEST_STATUSES } from '../config.js';

const customerRequestColumns = [
  { field: 'index', title: '#' },
  { 
    field: 'request_number', 
    title: 'ID запроса',
    formatter: (value, item) => {
      if (value) return value;
      return item._id || '-';
    }
  },
  { 
    field: 'request_date', 
    title: 'Дата', 
    formatter: (value, item) => {
      if (value) return formatDate(value);
      return formatDate(item.date || item.created_at || '');
    }
  },
  { 
    field: 'customer_info.customer_name', 
    title: 'Клиент',
    formatter: (value, item) => {
      if (value) return value;
      
      if (item.customer_info && item.customer_info.customer_name) {
        return item.customer_info.customer_name;
      }
      
      return item.customer_name || '-';
    }
  },
  { 
    field: 'requested_items.0.part_name', 
    title: 'Запчасть',
    formatter: (value, item) => {
      if (value) return value;
      
      if (item.requested_items && item.requested_items.length > 0) {
        return item.requested_items[0].part_name;
      }
      
      return '-';
    }
  },
  { 
    field: 'request_status', 
    title: 'Статус', 
    formatter: (value, item) => {
      if (value) return REQUEST_STATUSES[value] || value;
      return '-';
    }
  },
  { field: 'actions', title: 'Действия' }
];

export async function loadCustomerRequests() {
  try {
    const requests = await fetchAllCustomerRequests();
    
    if (requests && requests.length > 0) {
      console.log('Структура данных запросов клиентов:', requests[0]);
    }
    
    renderTable('customerRequestsTable', requests, customerRequestColumns, {
      actions: [
        {
          text: 'Посмотреть',
          className: 'view-btn',
          onClick: handleCustomerRequestView
        },
        {
          text: 'Редактировать',
          className: 'edit-btn',
          onClick: handleCustomerRequestEdit
        },
        {
          text: 'Удалить',
          className: 'delete-btn',
          onClick: handleCustomerRequestDelete
        }
      ]
    });
  } catch (error) {
    console.error('Ошибка при загрузке запросов клиентов:', error);
    alert('Не удалось загрузить запросы клиентов. Попробуйте позже.');
  }
}

async function handleCustomerRequestDelete(request) {
  if (!confirm(`Вы действительно хотите удалить запрос клиента ${request.request_id}?`)) {
    return;
  }
  
  try {
    await removeCustomerRequest(request._id);
    await loadCustomerRequests();
  } catch (error) {
    console.error('Ошибка при удалении запроса клиента:', error);
    alert('Не удалось удалить запрос клиента. Попробуйте позже.');
  }
}

async function handleCustomerRequestView(request) {

  const url = `customer-request.html?id=${request._id}`;
  console.log('Открывается URL:', url);
  
  window.location.href = url;
}

async function handleCustomerRequestEdit(order) {

  const url = `edit-customer-request.html?id=${order._id}`;
  console.log('Открывается URL для редактирования:', url);
  
  window.location.href = url;
}

export function initCustomerRequestsPage() {

  const createRequestBtn = document.getElementById('createCustomerRequestBtn');
  if (createRequestBtn) {
    createRequestBtn.addEventListener('click', () => {
      alert('Функциональность создания запросов клиентов будет добавлена позже');
    });
  }
} 
