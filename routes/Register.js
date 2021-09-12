const router = require("express").Router(); 

router.get("/register", (req, res) => {
    res.render("register")
}); 

module.exports = {
    router,
    path: "/"
}