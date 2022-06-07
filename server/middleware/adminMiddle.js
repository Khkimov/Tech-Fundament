const checkAdmin = (req, res, next) => {
  if (req.session.admin) {
    res.locals.admin = req.session.admin;
    next();
  } else {
    res.sedStatus(401);
  }
};

module.exports = { checkAdmin };
