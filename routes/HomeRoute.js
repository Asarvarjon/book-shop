const { ObjectId } = require("mongodb");

const router = require("express").Router();

router.get("/", async (req, res) => {  
    const data = await req.db.books.find().toArray();  
    res.render("index" ,{
        user: req.user,
        data,
    }) 
});

router.get("/details/:id", async (req, res) => {
    const book = await req.db.books.findOne({
        _id: new ObjectId(req.params.id)
    })
    console.log(book);

    const data = await req.db.books.find().toArray();   
    res.render("details", {
        user: req.user,
        data,
        book,
    })
})

 
 
 
 

module.exports = {
    router,
    path: "/"
}