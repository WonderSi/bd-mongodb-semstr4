export function initTabs(tabsContainerId = 'tableTabs', contentContainerId = 'tabContent') {
  const tabsContainer = document.getElementById(tabsContainerId);
  const contentContainer = document.getElementById(contentContainerId);
  
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
