const router = require("express").Router(); 
const { RegisterValidation } = require("../modules/validations")

router.get("/register", (req, res) => {
    res.render("register")
}); 

router.post("/registration", async (req, res) => {
    try {
        const data = await RegisterValidation.validateAsync(req.body);
        console.log(data);
        res.redirect("/register")
    } catch (error) {
        console.log(error);
        res.redirect("/register")
    }
})

module.exports = {
    router,
    path: "/"
}