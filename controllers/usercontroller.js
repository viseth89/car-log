const router = require("express").Router();
const { UserModel } = require("../models");

router.post("/register", async(req,res) => {

    let { email, password } = req.body.user;

    UserModel.create({
        email,
        password
    })

})

module.exports = router