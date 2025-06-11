import { fetchAllSuppliers, removeSupplier, updateSupplier } from '../api/suppliers-api.js';
import { renderTable } from '../components/table.js';
import { formatCategory } from '../config.js';

const supplierColumns = [
  { field: 'index', title: '#' },
  { 
    field: 'supplier_name', 
    title: 'Название компании',
    formatter: (value, item) => {
      if (value) return value;
      return item.name || item.company_name || '-';
    }
  },
  { 
    field: 'supplier_category', 
    title: 'Категория', 
    formatter: (value, item) => {
      if (value) return formatCategory(value);
      return formatCategory(item.category || '');
    }
  },
  { 
    field: 'contact_info.phone', 
    title: 'Телефон',
    formatter: (value, item) => {
      if (value) return value;
      return item.phone || '-';
    }
  },
  { 
    field: 'contact_info.email', 
    title: 'Email',
    formatter: (value, item) => {
      if (value) return value;
      return item.email || '-';
    }
  },
  { 
    field: 'contact_info.address', 
    title: 'Адрес',
    formatter: (value, item) => {
      if (value) return value;
      return item.address || '-';
    }
  },
  { field: 'actions', title: 'Действия' }
];

export async function loadSuppliers() {
  try {
    const suppliers = await fetchAllSuppliers();
    
    if (suppliers && suppliers.length > 0) {
      console.log('Структура данных поставщиков:', suppliers[0]);
    }
    
    renderTable('suppliersTable', suppliers, supplierColumns, {
      actions: [
        {
          text: 'Посмотреть',
          className: 'view-btn',
          onClick: handleSupplierView
        },
        {
          text: 'Редактировать',
          className: 'edit-btn',
          onClick: handleSupplierEdit
        },
        {
          text: 'Удалить',
          className: 'delete-btn',
          onClick: handleSupplierDelete
        }
      ]
    });
  } catch (error) {
    console.error('Ошибка при загрузке поставщиков:', error);
    alert('Не удалось загрузить поставщиков. Попробуйте позже.');
  }
}

async function handleSupplierView(supplier) {
  const url = `supplier.html?id=${supplier._id}`;
  console.log('Открывается URL:', url);
  
  window.location.href = url;
}

async function handleSupplierEdit(supplier) {
  const url = `edit-supplier.html?id=${supplier._id}`;
  console.log('Redirecting to edit page:', url);
  window.location.href = url;
}

async function handleSupplierDelete(supplier) {
  if (!confirm(`Вы действительно хотите удалить поставщика ${supplier.supplier_name}?`)) {
    return;
  }
  
  try {
    await removeSupplier(supplier._id);
    await loadSuppliers();
  } catch (error) {
    console.error('Ошибка при удалении поставщика:', error);
    alert('Не удалось удалить поставщика. Попробуйте позже.');
  }
}

export function initSuppliersPage() {
  const createSupplierBtn = document.getElementById('createSupplierBtn');
  if (createSupplierBtn) {
    createSupplierBtn.addEventListener('click', () => {
      window.location.href = 'add-supplier.html';
    });
  }
}
