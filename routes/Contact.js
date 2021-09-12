const router = require("express").Router(); 

router.get("/contact", (req, res) => {
    res.render("contact",{
        user: req.user
    })
}); 


module.exports = {
    router,
    path: "/"
}