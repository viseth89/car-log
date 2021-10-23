const router = require("express").Router();
const { UniqueConstraintError } = require("sequelize/lib/errors");
const { UserModel } = require("../models");


router.post("/register", async(req,res) => {

    let { email, password } = req.body.user;

    try {
        const User = await UserModel.create({
            email,
            password
        })
    
        res.status(201).json({
            message: "User successfully registered",
            user:User
        })
    } catch (err) {

        if (err instanceof UniqueConstraintError) {
            res.status(409).json({
                message:"Email already in use",
            })
        } else {
            res.status(500).json({
                message:"Failed to register user",
            })
        }
    }
})

router.post("/login", async (req,res) =>{
    
    let { email, password } = req.body.user;

    try{
        const loginUser = await UserModel.findOne({
            where: {
                email: email,
            },
        })

        if(loginUser){
            res.status(201).json({
                message: "User Successfully Logged In",
                user: loginUser
            })
        } else {
            res.status(401).json({
                message: "Login Failed"
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"Failed to log user in"
        })
    }
})


    // res.send("This is our user/register endpoint!")

    // There is not much different about the two methods. The two are practically identical. They can both pass objects and arrays.  even calls  at the end of its action. The only difference is the fact that  will convert non objects (such as null and undefined) into valid JSON while  cannot.ß



module.exports = router