const asyncHandler2 = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => {
      next(error);
    });
  };
};

// using try catch method
const asyncHandler = (func) => {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (error) {
      console.log("Error", error);
      res.status(error.code || 500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

export default asyncHandler;
