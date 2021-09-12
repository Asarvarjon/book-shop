const AdminMiddleware = require("../middlewares/AdminMiddleware");
const expressFileUpload = require("express-fileupload")
const path = require("path")

const router = require("express").Router();


router.get("/admin", AdminMiddleware, (req, res) => {
    res.render("admin", {
        user: req.user
    })
});

router.post("/admin", [AdminMiddleware, expressFileUpload()], async (req, res) => {
    try {
        const {
            photo
        } = req.files;
        const {
            name,
            author,
            price,
            content
        } = req.body;

        if (!(name && price && content && photo && author)) {
            throw new Error("Please, fill all inputs!")
        }

        const photo_ext = photo.name.split(".")[photo.name.split(".").length - 1];


        const book = await req.db.books.insertOne({
            name,
            author,
            price,
            content,
            photo_ext,
        })

        await photo.mv(path.join(__dirname, "..", "public", "uploads", book.insertedId + "." + photo_ext));
        res.json({
            ok: true,
        })

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