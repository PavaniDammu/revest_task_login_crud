const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports.signup = async(req, res) => {
    // Saving the User to Database
    try {
        const user = await User.create({
            userName: req.body.userName,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: bcrypt.hashSync(req.body.password, 8),
        });

        if (user) res.send({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports.signin = async(req, res) => {
    try {
        const user = await User.findOne({
            where: {
                userName: req.body.userName,
            },
        });

        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                message: "Invalid Password!",
            });
        }

        const token = jwt.sign({ id: user.id },
            config.secret, {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400, // 24 hours
            });

        req.session.token = token;

        return res.status(200).send({
            id: user.id,
            userName: user.userName,
            token: token
        });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

module.exports.signout = async(req, res) => {
    try {
        req.headers.authorization = null;
        return res.status(200).send({
            message: "You've been signed out!"
        });
    } catch (err) {
        next(err);
    }
};