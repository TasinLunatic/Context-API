const logger = (req, res, next) => {
  const reqURL=req.url;
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;
    console.log(
      `[${new Date().toISOString()}]:  ${req.method} ~ ${reqURL} ~ ${res.statusCode} - ${duration}ms`,
    );
  });

  console.log(`[${new Date().toISOString()}]:  ${req.method} ~ ${reqURL}`);
  next();
};

export default logger;