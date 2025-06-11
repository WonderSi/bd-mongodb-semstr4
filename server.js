require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log("Server starting without MongoDB:", err.message);
    
    app.listen(PORT, () => {
      console.log(`Server running without DB on http://localhost:${PORT}`);
    });
  });
