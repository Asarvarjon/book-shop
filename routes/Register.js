const router = require("express").Router(); 

router.get("/register", (req, res) => {
    res.render("register")
}); 

router.post("/registration", (req, res) => {
    console.log(req.body);
})

module.exports = {
    router,
    path: "/"
}