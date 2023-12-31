const { CustomAPIError } = require("../errors/customError");

const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: `Something went wrong. Try again` });
};

module.exports = errorHandlerMiddleware;
