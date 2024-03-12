const db = require("../models");
const User = db.users;

const checkDuplicateUsername = async(req, res, next) => {
    try {
        let user = await User.findOne({
            where: {
                userName: req.body.userName
            }
        });

        if (user) {
            return res.status(400).send({
                message: "Failed! Username is already in use!"
            });
        }
        next();
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};

module.exports = checkDuplicateUsername;