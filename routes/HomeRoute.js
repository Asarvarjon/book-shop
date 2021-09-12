const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("index")
});  
 

router.get("/photo-detail.html", (req, res) => {
    res.render("photo-detail")
})


module.exports = {
    router,
    path: "/"
}