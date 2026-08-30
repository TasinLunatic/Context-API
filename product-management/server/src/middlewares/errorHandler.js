const errorHandler = (err, req, res, next) => {
  console.error(
    `[${new Date().toISOString()}]: ❌ ERROR ${req.method} ~ ${req.url} ~ ${err.message}`
  );

  res.status(500).json({
    error: "error",
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;