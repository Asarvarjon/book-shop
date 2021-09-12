const router = require("express").Router();
 ; 

router.get("/about", (req, res) => {
    res.render("about",{
        user: req.user
    })
}); 


module.exports = {
    router,
    path: "/"
}