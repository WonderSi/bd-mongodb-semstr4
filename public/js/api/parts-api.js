const API_BASE_URL = 'http://localhost:3000/api/parts';

export async function fetchAllParts() {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении запчастей:', error);
    throw error;
  }
}

export async function fetchPartById(partId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${partId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при получении запчасти ${partId}:`, error);
    throw error;
  }
}

export async function createPart(partData) {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(partData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при создании запчасти:', error);
    throw error;
  }
}

export async function updatePart(partId, partData) {
  try {
    const response = await fetch(`${API_BASE_URL}/${partId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(partData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при обновлении запчасти ${partId}:`, error);
    throw error;
  }
}

export async function removePart(partId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${partId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`Ошибка при удалении запчасти ${partId}:`, error);
    throw error;
  }
} 
