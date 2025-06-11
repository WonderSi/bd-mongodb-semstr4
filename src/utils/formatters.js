exports.formatDate = (date, locale = 'ru-RU') => {
  if (!date) return '';
  
  const dateObj = date instanceof Date ? date : new Date(date);
  
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

exports.formatCurrency = (amount, currency = 'RUB', locale = 'ru-RU') => {
  if (amount === undefined || amount === null) return '';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

exports.capitalizeFirstLetter = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}; 
