const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (req.headers.token && req.headers.token.startsWith("Bearer")) {
    let token = req.headers.token.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      console.log(err);
      if (err) return res.status(404).json("Token is not valid!!");

      req.user = user;

      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!!");
  }
  const authHeader = req.headers.token;
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
