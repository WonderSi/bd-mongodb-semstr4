import { loadOrders, initOrdersPage } from './pages/orders-page.js';
import { loadParts, initPartsPage } from './pages/parts-page.js';
import { loadSuppliers, initSuppliersPage } from './pages/suppliers-page.js';
import { loadSales, initSalesPage } from './pages/sales-page.js';
import { loadWarehouseCells, initWarehousePage } from './pages/warehouse-page.js';
import { loadCustomerRequests, initCustomerRequestsPage } from './pages/customer-requests-page.js';

async function loadAllData() {
  try {
    await loadParts();
    await loadOrders();
    await loadSales();
    await loadSuppliers();
    await loadWarehouseCells();
    await loadCustomerRequests();
    
    return { success: true };
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
    return { success: false, error: error.message };
  }
}

function initApp() {
  initTabsWithoutAutoLoad();
  
  initPartsPage();
  initOrdersPage();
  initSalesPage();
  initSuppliersPage();
  initWarehousePage();
  initCustomerRequestsPage();
  
  document.getElementById('loadDataBtn').addEventListener('click', async function() {
    this.disabled = true;
    this.textContent = 'Загрузка...';
    
    try {
      const result = await loadAllData();
      
      if (result.success) {
        this.textContent = 'Данные загружены';
      } else {
        this.textContent = 'Ошибка загрузки';
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      this.textContent = 'Ошибка загрузки';
    } finally {
      this.disabled = false;
    }
  });
  
}

function initTabsWithoutAutoLoad() {
  const tabsContainer = document.getElementById('tableTabs');
  const contentContainer = document.getElementById('tabContent');
  
  if (!tabsContainer || !contentContainer) return;
  
  const tabs = tabsContainer.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      
      tab.classList.add('active');
      
      const targetId = tab.dataset.target;
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const sections = contentContainer.querySelectorAll('.section');
        sections.forEach(section => section.classList.remove('active'));
        
        targetSection.classList.add('active');
        
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initApp); 
