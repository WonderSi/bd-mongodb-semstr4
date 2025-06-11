const API_BASE_URL = 'http://localhost:3000/api/orders';

export async function fetchAllOrders() {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении заказов:', error);
    throw error;
  }
}

export async function fetchOrderById(orderId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${orderId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при получении заказа ${orderId}:`, error);
    throw error;
  }
}

export async function createOrder(orderData) {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при создании заказа:', error);
    throw error;
  }
}

export async function updateOrder(orderId, orderData) {
  try {
    const response = await fetch(`${API_BASE_URL}/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при обновлении заказа ${orderId}:`, error);
    throw error;
  }
}

export async function removeOrder(orderId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${orderId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`Ошибка при удалении заказа ${orderId}:`, error);
    throw error;
  }
} 
