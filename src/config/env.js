module.exports = {
  PORT: process.env.PORT || 3000,
  
  NODE_ENV: process.env.NODE_ENV || 'development',

  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/auto-parts-db',

  API_PREFIX: '/api',
  
  CORS_ORIGINS: [
    'http://localhost:5501', 
    'http://127.0.0.1:5501', 
    'http://localhost:8080'
  ],
  
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '30d'
}; 
