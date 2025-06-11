const API_BASE_URL = 'http://localhost:3000/api/warehouse-cells';

export async function fetchAllWarehouseCells() {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении ячеек склада:', error);
    throw error;
  }
}

export async function fetchWarehouseCellById(cellId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cellId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при получении ячейки склада ${cellId}:`, error);
    throw error;
  }
}

export async function createWarehouseCell(cellData) {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cellData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при создании ячейки склада:', error);
    throw error;
  }
}

export async function updateWarehouseCell(cellId, cellData) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cellId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cellData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при обновлении ячейки склада ${cellId}:`, error);
    throw error;
  }
}

export async function removeWarehouseCell(cellId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cellId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`Ошибка при удалении ячейки склада ${cellId}:`, error);
    throw error;
  }
} 
