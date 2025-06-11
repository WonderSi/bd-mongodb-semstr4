export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  
  modal.classList.add('active');
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  
  modal.classList.remove('active');
}

export function initModal(modalId, options = {}) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  
  const closeButton = modal.querySelector('.close-modal');
  if (closeButton) {
    closeButton.addEventListener('click', () => closeModal(modalId));
  }

  const cancelButton = modal.querySelector('.btn-secondary');
  if (cancelButton && !options.disableCancelButton) {
    cancelButton.addEventListener('click', () => closeModal(modalId));
  }
  
  if (!options.disableOutsideClick) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal(modalId);
      }
    });
  }
  
  const saveButton = modal.querySelector('.btn-success, .btn-primary');
  if (saveButton && options.onSave) {
    saveButton.addEventListener('click', options.onSave);
  }
}

export function setModalContent(modalId, title, content) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  
  const titleElement = modal.querySelector('.modal-title');
  if (titleElement) {
    titleElement.textContent = title;
  }
  
  const contentElement = modal.querySelector('.modal-body');
  if (contentElement) {
    if (typeof content === 'string') {
      contentElement.innerHTML = content;
    } 
    else if (content instanceof HTMLElement) {
      contentElement.innerHTML = '';
      contentElement.appendChild(content);
    }
  }
}

export function createFormModal(modalId, formConfig, onSubmit) {
  const formHtml = `
    <form id="${modalId}-form">
      ${formConfig.fields.map(field => `
        <div class="form-group">
          <label for="${field.id}">${field.label}${field.required ? ' *' : ''}</label>
          ${getFieldHtml(field)}
        </div>
      `).join('')}
    </form>
  `;
  
  setModalContent(modalId, formConfig.title, formHtml);
  
  initModal(modalId, {
    onSave: () => {
      const formData = {};
      const form = document.getElementById(`${modalId}-form`);
      
      if (form) {
        formConfig.fields.forEach(field => {
          const element = form.querySelector(`#${field.id}`);
          if (element) {
            formData[field.name || field.id] = element.value;
          }
        });
        if (onSubmit) {
          onSubmit(formData);
        }
      }
    }
  });
}

function getFieldHtml(field) {
  switch (field.type) {
    case 'select':
      return `
        <select id="${field.id}" class="form-input" ${field.required ? 'required' : ''}>
          <option value="">Выберите...</option>
          ${field.options.map(option => `
            <option value="${option.value}">${option.label}</option>
          `).join('')}
        </select>
      `;
    case 'textarea':
      return `
        <textarea id="${field.id}" class="form-input" ${field.required ? 'required' : ''}
          placeholder="${field.placeholder || ''}">${field.value || ''}</textarea>
      `;
    case 'date':
      return `
        <input type="date" id="${field.id}" class="form-input" 
          value="${field.value || ''}" ${field.required ? 'required' : ''}>
      `;
    case 'number':
      return `
        <input type="number" id="${field.id}" class="form-input" 
          value="${field.value || ''}" ${field.required ? 'required' : ''}
          min="${field.min !== undefined ? field.min : ''}" 
          max="${field.max !== undefined ? field.max : ''}"
          step="${field.step || 1}">
      `;
    case 'checkbox':
      return `
        <input type="checkbox" id="${field.id}" 
          ${field.checked ? 'checked' : ''} ${field.required ? 'required' : ''}>
      `;
    default: // text, email, password, etc.
      return `
        <input type="${field.type || 'text'}" id="${field.id}" class="form-input" 
          value="${field.value || ''}" ${field.required ? 'required' : ''}
          placeholder="${field.placeholder || ''}">
      `;
  }
} 
