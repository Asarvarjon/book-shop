const AdminMiddleware = require("../middlewares/AdminMiddleware");
const expressFileUpload = require("express-fileupload")

const router = require("express").Router();
 

router.get("/admin", AdminMiddleware, (req, res) => {
    res.render("admin",{
        user: req.user
    })
}); 

router.post("/admin", [AdminMiddleware, expressFileUpload()], (req, res) => {
    try {
        console.log(req.body, req.files);
    } catch (error) {
        res.json({
            error: error,
        })
    }
})


module.exports = {
    router,
    path: "/"
}