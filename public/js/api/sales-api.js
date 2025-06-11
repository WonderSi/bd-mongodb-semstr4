const API_BASE_URL = 'http://localhost:3000/api/sales';

export async function fetchAllSales() {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении продаж:', error);
    throw error;
  }
}

export async function fetchSaleById(saleId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${saleId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при получении продажи ${saleId}:`, error);
    throw error;
  }
}

export async function createSale(saleData) {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(saleData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при создании продажи:', error);
    throw error;
  }
}

export async function updateSale(saleId, saleData) {
  try {
    const response = await fetch(`${API_BASE_URL}/${saleId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(saleData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при обновлении продажи ${saleId}:`, error);
    throw error;
  }
}

export async function removeSale(saleId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${saleId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`Ошибка при удалении продажи ${saleId}:`, error);
    throw error;
  }
} 
