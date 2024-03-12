module.exports = app => {
    const checkDuplicateUsername = require("../middleware/verifySingUp.js");
    const auth = require("../controllers/auth.controller.js");

    var router = require("express").Router();

    router.post(
        "/signup", [checkDuplicateUsername], auth.signup
    );

    router.post("/signin", auth.signin);

    router.post("/signout", auth.signout);

    app.use('/api/auth', router);
};