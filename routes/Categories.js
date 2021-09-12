const router = require("express").Router(); 

router.get("/categories", (req, res) => {
    res.render("categories",{
        user: req.user
    })
}); 

module.exports = {
    router,
    path: "/"
}