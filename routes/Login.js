const { compareHash } = require("../modules/bcrypt");
const { LoginValidation } = require("../modules/validations");
const { createToken } = require("../modules/jwt")

const router = require("express").Router();
 ; 

router.get("/login", (req, res) => {
    res.render("login")
}); 

router.post("/login", async (req, res) => {
    try {
        const data = await LoginValidation.validateAsync(req.body);

        const user = await req.db.users.findOne({
            email: data.email,
        });

        if(!user) throw new Error("User not found");

        const isTrust = await compareHash(user.password, data.password);
        if(!isTrust) throw new Error("Password is incorrect!");

        const token = await createToken({
            id: user._id,
        })

        res.cookie("token", token).redirect("/admin")

    } catch (error) {
        res.render("login", {
            error
        })
    }
})


module.exports = {
    router,
    path: "/"
}