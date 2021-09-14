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

    const data = await req.db.books.find().toArray();
    
    
    res.render("details", {
        user: req.user,
        data,
        book,
    })
})


router.post("/buy", (req, res) => {
    const order = req.db.orders.insertOne({
        ...req.body
    })

    res.redirect("/")
 
})

router.get("/order", async (req, res) => {
    const order = await req.db.orders.find().toArray(); 

    res.render("order", {
        user: req.user,
        order,
    })
})


 


 
 
 
 

module.exports = {
    router,
    path: "/"
}