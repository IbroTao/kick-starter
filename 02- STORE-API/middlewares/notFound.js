const notFound = (req, res) => {
  res.status(500).json("Route Not Found");
};

module.exports = notFound;
