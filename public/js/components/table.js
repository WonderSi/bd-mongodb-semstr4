export function renderTable(tableId, data, columns, options = {}) {
  const table = document.getElementById(tableId);
  if (!table) return;
  
  const tbody = table.querySelector('tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  if (!data || data.length === 0) {
    const emptyRow = document.createElement('tr');
    const emptyCell = document.createElement('td');
    emptyCell.colSpan = columns.length;
    emptyCell.textContent = options.emptyMessage || 'Нет данных для отображения';
    emptyCell.style.textAlign = 'center';
    emptyCell.style.padding = '20px';
    emptyRow.appendChild(emptyCell);
    tbody.appendChild(emptyRow);
    return;
  }
  
  data.forEach((item, index) => {
    const row = document.createElement('tr');
    
    columns.forEach(column => {
      const cell = document.createElement('td');
      
      if (column.field === 'index') {
        cell.textContent = index + 1;
      } else if (column.field === 'actions') {
        if (options.actions && Array.isArray(options.actions)) {
          const actionsGroup = document.createElement('div');
          actionsGroup.className = 'actions-group';
          
          options.actions.forEach(action => {
            const button = document.createElement('button');
            button.className = action.className || '';
            button.textContent = action.text || '';
            
            if (action.onClick) {
              button.addEventListener('click', () => action.onClick(item));
            }
            
            actionsGroup.appendChild(button);
          });
          
          cell.appendChild(actionsGroup);
        }
      } else {
        const value = getNestedValue(item, column.field);
        
        if (column.formatter) {
          cell.innerHTML = column.formatter(value, item);
        } else {
          cell.textContent = value !== undefined && value !== null ? value : '-';
        }
      }
      
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  if (options.onRowClick) {
    const rows = tbody.querySelectorAll('tr');
    rows.forEach((row, index) => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', (event) => {
        if (event.target.tagName !== 'BUTTON') {
          options.onRowClick(data[index], index);
        }
      });
    });
  }
}

function getNestedValue(obj, path) {
  if (!obj || !path) return undefined;
  
  const keys = path.split('.');
  let value = obj;
  
  for (const key of keys) {
    if (value === null || value === undefined || typeof value !== 'object') {
      return undefined;
    }
    value = value[key];
  }
  
  return value;
}

export function clearTable(tableId) {
  const table = document.getElementById(tableId);
  if (!table) return;
  
  const tbody = table.querySelector('tbody');
  if (tbody) {
    tbody.innerHTML = '';
  }
} 
