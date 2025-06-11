const errorHandler = (err, req, res, next) => {
  console.error("Server error:", err);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  res.status(statusCode).json({
    error: "Internal server error",
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack
  });
};

const notFound = (req, res, next) => {
  const error = new Error(`Не найдено - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

module.exports = {
  errorHandler,
  notFound
}; 
