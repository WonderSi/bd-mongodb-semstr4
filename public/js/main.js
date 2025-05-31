import { initTabs } from './tabs.js';
import { loadAllData } from './data.js';

document.addEventListener('DOMContentLoaded', function() {
  initTabs();
  
  document.getElementById("loadDataBtn").onclick = async () => {
    const loadBtn = document.getElementById("loadDataBtn");
    loadBtn.disabled = true;
    loadBtn.textContent = "Загрузка...";
    
    try {
      const result = await loadAllData();
      
      if (result.success) {
        loadBtn.textContent = "Данные загружены";
      } else {
        console.error("Ошибка при загрузке данных:", result.error);
        loadBtn.textContent = "Ошибка загрузки";
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      loadBtn.textContent = "Ошибка загрузки";
    } finally {
      loadBtn.disabled = false;
    }
  };
}); 
