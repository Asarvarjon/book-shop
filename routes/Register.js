const router = require("express").Router(); 
const { generateCrypt } = require("../modules/bcrypt");
const { RegisterValidation } = require("../modules/validations")

router.get("/register", (req, res) => { 
    res.render("register" ,{
        user: req.user
    })
}); 

router.post("/register", async (req, res) => {
    try {
        const data = await RegisterValidation.validateAsync(req.body);
         
        let user = await req.db.users.findOne({
            email: data.email.toLowerCase(),
        })

        if(user) throw new Error ("Email already exists");
        user = await req.db.users.insertOne({
            ...data,
            password: await generateCrypt(data.password),
        })

        res.redirect("/login")
    } catch (error) { 
        res.render("register", {
            error
        })  
    }
})

module.exports = {
    router,
    path: "/"
}