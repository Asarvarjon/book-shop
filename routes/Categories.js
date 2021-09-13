const router = require("express").Router(); 

router.get("/categories", async (req, res) => {
    const data = await req.db.books.find().toArray();  

    res.render("categories",{
        user: req.user,
        data
    })
}); 

module.exports = {
    router,
    path: "/"
}