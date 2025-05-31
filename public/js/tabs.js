function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('.section');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      const targetId = this.getAttribute('data-target');

      sections.forEach(section => section.classList.remove('active'));

      document.getElementById(targetId).classList.add('active');
    });
  });
}

export { initTabs }; 
