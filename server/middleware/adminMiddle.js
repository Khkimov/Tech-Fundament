const checkAdmin = (req, res, next) => {
  if (req.session.cookie) {
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  checkAdmin,
};
