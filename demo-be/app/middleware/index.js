const authJwt = require("../middleware/authJwt");
const verifySignUp = require("../middleware/verifySingUp").default;

module.exports = {
    authJwt,
    verifySignUp
};