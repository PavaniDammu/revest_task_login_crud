const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

verifyToken = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    console.log(req.headers);

    if (!token) {
        return res.status(401).send({ message: "Unauthorized: Missing token" });
    }

    jwt.verify(token, config.secret, (err, user) => {
        if (err) {
            return res.status(403).send({ message: "Unauthorized: Invalid token" });
        }
        req.user = user;
        next();
    });
};

module.exports = verifyToken;