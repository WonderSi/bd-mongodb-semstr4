const API_BASE_URL = 'http://localhost:3000/api/customer-requests';

export async function fetchAllCustomerRequests() {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении запросов клиентов:', error);
    throw error;
  }
}

export async function fetchCustomerRequestById(requestId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${requestId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при получении запроса клиента ${requestId}:`, error);
    throw error;
  }
}

export async function createCustomerRequest(requestData) {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при создании запроса клиента:', error);
    throw error;
  }
}

export async function updateCustomerRequest(requestId, requestData) {
  try {
    const response = await fetch(`${API_BASE_URL}/${requestId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при обновлении запроса клиента ${requestId}:`, error);
    throw error;
  }
}

export async function removeCustomerRequest(requestId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${requestId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`Ошибка при удалении запроса клиента ${requestId}:`, error);
    throw error;
  }
} 
