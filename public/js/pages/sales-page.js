import { fetchAllSales, fetchSaleById, createSale, updateSale, removeSale } from '../api/sales-api.js';
import { renderTable } from '../components/table.js';
import { formatDate, formatCurrency } from '../utils/formatter.js';

const saleColumns = [
  { field: 'index', title: '#' },
  { 
    field: 'sale_number', 
    title: 'Номер продажи',
    formatter: (value, item) => {
      if (value) return value;
      return item.number || item._id || 'Без номера';
    }
  },
  { 
    field: 'sale_date', 
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
      return item.customer_name || '-';
    }
  },
  { 
    field: 'financial_info.total_amount', 
    title: 'Сумма', 
    formatter: (value, item) => {
      if (value !== undefined) return formatCurrency(value);
      return formatCurrency(item.total_amount || 0);
    }
  },
  { field: 'actions', title: 'Действия' }
];

export async function loadSales() {
  try {
    const sales = await fetchAllSales();
    
    if (sales && sales.length > 0) {
      console.log('Структура данных продаж:', sales[0]);
    }
    
    renderTable('salesTable', sales, saleColumns, {
      actions: [
        {
          text: 'Посмотреть',
          className: 'view-btn',
          onClick: handleSaleView
        },
        {
          text: 'Редактировать',
          className: 'edit-btn',
          onClick: handleSaleEdit
        },
        {
          text: 'Удалить',
          className: 'delete-btn',
          onClick: handleSaleDelete
        }
      ]
    });
  } catch (error) {
    console.error('Ошибка при загрузке продаж:', error);
    alert('Не удалось загрузить продажи. Попробуйте позже.');
  }
}

async function handleSaleView(sale) {
  const url = `sale.html?id=${sale._id}`;
  console.log('Открывается URL:', url);
  
  window.location.href = url;
}

async function handleSaleEdit(part) {
  const url = `edit-sale.html?id=${part._id}`;
  console.log('Открывается URL редактирования:', url);

  window.location.href = url;
}


async function handleSaleDelete(sale) {
  const saleId = sale.sale_number || sale._id;
  if (!confirm(`Вы действительно хотите удалить продажу ${saleId}?`)) {
    return;
  }
  
  try {
    await removeSale(sale._id);
    await loadSales();
  } catch (error) {
    console.error('Ошибка при удалении продажи:', error);
    alert('Не удалось удалить продажу. Попробуйте позже.');
  }
}

export function initSalesPage() {

  const createSaleBtn = document.getElementById('createSaleBtn');
  if (createSaleBtn) {
    createSaleBtn.addEventListener('click', () => {
      alert('Функциональность создания продаж будет добавлена позже');
    });
  }
} 
