module.exports.isLogin = (req, res, next) => {
  if (req.session.user.isLoggedIn) {
    next();
  } else {
    res.redirect('/login');
  }
}
// Protection if user is not logged

module.exports.protectWhenLogin = (req, res, next) => {
  if (req.session.user.isLoggedIn) {
    res.redirect('/');
  } else {
    next();
  }
}
