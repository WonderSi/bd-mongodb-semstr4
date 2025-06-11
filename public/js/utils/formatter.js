
export function formatDate(dateString, format = 'date') {
  if (!dateString) return '-';
  
  try {
    const date = new Date(dateString);
    
    if (isNaN(date)) {
      return dateString;
    }
    
    switch (format) {
      case 'datetime':
        return date.toLocaleString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      case 'time':
        return date.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit'
        });
      case 'date':
      default:
        return date.toLocaleDateString('ru-RU');
    }
  } catch (e) {
    return dateString;
  }
}

export function formatCurrency(amount, currency = 'RUB') {
  if (amount === undefined || amount === null) return '-';
  
  const currencySymbolMap = {
    'RUB': '₽',
    'USD': '$',
    'EUR': '€',
    'CNY': '¥'
  };
  
  try {
    return amount.toLocaleString('ru-RU', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    });
  } catch (e) {
    return `${amount.toFixed(2)} ${currencySymbolMap[currency] || currency}`;
  }
}

export function formatStatus(status, statusMap = {}) {
  return statusMap[status] || status;
}

export function formatObjectKeys(obj) {
  if (!obj || typeof obj !== 'object') return '';
  
  return Object.keys(obj)
    .map(key => {
      const value = obj[key];
      const displayKey = key.replace(/_/g, ' ');
      
      if (value && typeof value === 'object') {
        return `${displayKey}: ${formatObjectKeys(value)}`;
      }
      
      return `${displayKey}: ${value}`;
    })
    .join(', ');
}

export function formatNumber(number, options = {}) {
  if (number === undefined || number === null) return '-';
  
  const defaultOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  return number.toLocaleString('ru-RU', mergedOptions);
}

export function formatPercent(value) {
  if (value === undefined || value === null) return '-';
  
  return `${value.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}%`;
}

export function truncateText(text, maxLength = 100) {
  if (!text) return '';
  
  if (text.length <= maxLength) {
    return text;
  }
  
  return text.substring(0, maxLength) + '...';
} 
