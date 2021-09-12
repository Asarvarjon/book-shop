const router = require("express").Router(); 

router.get("/categories", (req, res) => {
    res.render("categories")
}); 

module.exports = {
    router,
    path: "/"
}