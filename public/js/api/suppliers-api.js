const API_BASE_URL = 'http://localhost:3000/api/suppliers';

export async function fetchAllSuppliers() {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении поставщиков:', error);
    throw error;
  }
}

export async function fetchSupplierById(supplierId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${supplierId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при получении поставщика ${supplierId}:`, error);
    throw error;
  }
}

export async function createSupplier(supplierData) {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(supplierData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при создании поставщика:', error);
    throw error;
  }
}

export async function updateSupplier(supplierId, supplierData) {
  try {
    const response = await fetch(`${API_BASE_URL}/${supplierId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(supplierData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при обновлении поставщика ${supplierId}:`, error);
    throw error;
  }
}

export async function removeSupplier(supplierId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${supplierId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`Ошибка при удалении поставщика ${supplierId}:`, error);
    throw error;
  }
} 
