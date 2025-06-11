import { fetchAllParts, removePart, updatePart } from '../api/parts-api.js';
import { renderTable } from '../components/table.js';
import { formatCurrency } from '../utils/formatter.js';

const partColumns = [
  { field: 'index', title: '#' },
  { field: 'part_name', title: 'Название' },
  { 
    field: 'part_category', 
    title: 'Категория',
    formatter: (value, item) => {
      if (value) return formatCategory(value);
      return formatCategory(item.category || '');
    }
  },
  { 
    field: 'specifications.manufacturer', 
    title: 'Производитель', 
    formatter: (value, item) => {
      if (value) return value;
      return item.manufacturer || '-';
    }
  },
  { 
    field: 'specifications.material', 
    title: 'Материал',
    formatter: (value, item) => {
      if (value) return value;
      return item.material || '-';
    }
  },
  { 
    field: 'warehouse_info.current_stock', 
    title: 'Количество',
    formatter: (value, item) => {
      if (value !== undefined) return value;
      return item.quantity || item.stock || 0;
    }
  },
  { 
    field: 'suppliers_info.0.price_per_unit', 
    title: 'Цена', 
    formatter: (value, item) => {
      if (value !== undefined) return formatCurrency(value);
      if (item.suppliers_info && item.suppliers_info.length > 0) {
        return formatCurrency(item.suppliers_info[0].price_per_unit);
      }
      return formatCurrency(item.price || item.unit_price || 0);
    }
  },
  { field: 'actions', title: 'Действия' }
];


export async function loadParts() {
  try {
    const parts = await fetchAllParts();
    
    if (parts && parts.length > 0) {
      console.log('Структура данных запчастей:', parts[0]);
    }
    
    renderTable('partsTable', parts, partColumns, {
      actions: [
        {
          text: 'Посмотреть',
          className: 'view-btn',
          onClick: handlePartView
        },
        {
          text: 'Редактировать',
          className: 'edit-btn',
          onClick: handlePartEdit
        },
        {
          text: 'Удалить',
          className: 'delete-btn',
          onClick: handlePartDelete
        }
      ]
    });
  } catch (error) {
    console.error('Ошибка при загрузке запчастей:', error);
    alert('Не удалось загрузить запчасти. Попробуйте позже.');
  }
}

function formatCategory(category) {
  const categoryMap = {
    'engine': 'Двигатель',
    'transmission': 'Трансмиссия',
    'brake_system': 'Тормозная система',
    'suspension': 'Подвеска',
    'body': 'Кузов',
    'electrical': 'Электрика',
    'interior': 'Салон',
    'exhaust': 'Выхлопная система',
    'cooling': 'Система охлаждения',
    'fuel_system': 'Топливная система',
    'electrical_system': 'Электрическая система',
    'steering': 'Рулевое управление',
    'filters': 'Фильтры',
    'accessories': 'Аксессуары'
  };
  
  return categoryMap[category] || category;
}

async function handlePartDelete(part) {
  if (!confirm(`Вы действительно хотите удалить запчасть ${part.part_name}?`)) {
    return;
  }
  
  try {
    await removePart(part._id);
    await loadParts();
  } catch (error) {
    console.error('Ошибка при удалении запчасти:', error);
    alert('Не удалось удалить запчасть. Попробуйте позже.');
  }
}

async function handlePartView(part) {
  const url = `part.html?id=${part._id}`;
  console.log('Открывается URL:', url);
  
  window.location.href = url;
}

async function handlePartEdit(part) {
  const url = `edit-part.html?id=${part._id}`;
  console.log('Открывается URL редактирования:', url);
  
  window.location.href = url;
}

export function initPartsPage() {
  
  const createPartBtn = document.getElementById('createPartBtn');
  if (createPartBtn) {
    createPartBtn.addEventListener('click', () => {
      alert('Функциональность создания запчастей будет добавлена позже');
    });
  }
} 
