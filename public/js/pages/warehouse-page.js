import { fetchAllWarehouseCells, removeWarehouseCell, updateWarehouseCell } from '../api/warehouse-api.js';
import { renderTable } from '../components/table.js';
import { CELL_STATUSES } from '../config.js';

const warehouseCellColumns = [
  { field: 'index', title: '#' },
  { 
    field: 'cell_number', 
    title: 'Номер ячейки',
    formatter: (value, item) => {
      if (value) return value;
      return '-';
    }
  },
  { 
    field: 'cell_characteristics.zone', 
    title: 'Зона',
    formatter: (value, item) => {
      if (value) return value;
      
      if (item.cell_characteristics && item.cell_characteristics.zone) {
        return item.cell_characteristics.zone;
      }
      
      return '-';
    }
  },
  { 
    field: 'cell_status', 
    title: 'Статус', 
    formatter: (value, item) => {
      if (value) return CELL_STATUSES[value];
      return '-';
    }
  },
  { 
    field: 'cell_characteristics.max_capacity_kg', 
    title: 'Вместимость',
    formatter: (value, item) => {
      if (value !== undefined) return value + ' кг';
      
      if (item.cell_characteristics) {
        if (item.cell_characteristics.max_capacity_kg) {
          return item.cell_characteristics.max_capacity_kg + ' кг';
        }
        if (item.cell_characteristics.max_volume_m3) {
          return item.cell_characteristics.max_volume_m3 + ' м³';
        }
      }
      
      return '-';
    }
  },
  { field: 'actions', title: 'Действия' }
];

export async function loadWarehouseCells() {
  try {
    const cells = await fetchAllWarehouseCells();
    
    if (cells && cells.length > 0) {
      console.log('Структура данных ячеек склада:', cells[0]);
    }
    
    renderTable('warehouseCellsTable', cells, warehouseCellColumns, {
      actions: [
        {
          text: 'Посмотреть',
          className: 'view-btn',
          onClick: handleWarehouseCellView
        },
        {
          text: 'Редактировать',
          className: 'edit-btn',
          onClick: handleWarehouseCellEdit
        },
        {
          text: 'Удалить',
          className: 'delete-btn',
          onClick: handleWarehouseCellDelete
        }
      ]
    });
  } catch (error) {
    console.error('Ошибка при загрузке ячеек склада:', error);
    alert('Не удалось загрузить ячейки склада. Попробуйте позже.');
  }
}

async function handleWarehouseCellView(cell) {
  const url = `warehouse-cell.html?id=${cell._id}`;
  console.log('Открывается URL:', url);
  
  window.location.href = url;
}

async function handleWarehouseCellEdit(cell) {
  const url = `edit-warehouse-cell.html?id=${cell._id}`;
  console.log('Открывается URL для редактирования:', url);
  
  window.location.href = url;
}

async function handleWarehouseCellDelete(cell) {
  if (!confirm(`Вы действительно хотите удалить ячейку склада ${cell.cell_number}?`)) {
    return;
  }
  
  try {
    await removeWarehouseCell(cell._id);
    await loadWarehouseCells();
  } catch (error) {
    console.error('Ошибка при удалении ячейки склада:', error);
    alert('Не удалось удалить ячейку склада. Попробуйте позже.');
  }
}

export function initWarehousePage() {
  const createCellBtn = document.getElementById('createWarehouseCellBtn');
  if (createCellBtn) {
    createCellBtn.addEventListener('click', () => {
      alert('Функциональность создания ячеек склада будет добавлена позже');
    });
  }
} 
