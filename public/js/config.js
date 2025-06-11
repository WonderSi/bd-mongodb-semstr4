export const API_BASE_URL = 'http://localhost:3000';

export const ORDER_STATUSES = {
  'draft': 'Черновик',
  'placed': 'Размещен',
  'processing': 'В обработке',
  'shipped': 'Отправлен',
  'delivered': 'Доставлен',
  'completed': 'Завершен',
  'cancelled': 'Отменен'
};

export const REQUEST_STATUSES = {
  'new': 'Новый',
  'processing': 'В обработке',
  'pending': 'Ожидает',
  'fulfilled': 'Выполнен',
  'cancelled': 'Отменен'
};

export const CELL_STATUSES = {
  'available': 'Доступна',
  'occupied': 'Занята',
  'reserved': 'Зарезервирована',
  'maintenance': 'На обслуживании'
};

export const PRIORITY_LEVELS = {
  'low': 'Низкий',
  'medium': 'Средний',
  'high': 'Высокий',
  'urgent': 'Срочный'
};

async function fetchJson(url) {
  const res = await fetch(`${API_BASE_URL}${url}`);
  return res.json();
}

function inspectObject(obj, prefix = '') {
  if (!obj) return;
  console.log(`${prefix} Доступные поля:`, Object.keys(obj));
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      inspectObject(value, `${prefix}.${key}`);
    }
  }
}

function formatCategory(category) {
  if (!category) return '-';
  
  switch(category) {
    case 'firm': return 'Компания';
    case 'dealer': return 'Дилер';
    case 'small_production': return 'Малое производство';
    default: return category;
  }
}

export { fetchJson, inspectObject, formatCategory }; 
