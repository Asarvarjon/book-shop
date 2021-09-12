require("dotenv").config()

const express = require("express")
const server = express()
const cookieParser = require("cookie-parser");
const path = require("path");
const routes = require("./routes/routes")
const mongodb = require("./modules/mongo");
const UserMiddleware = require("./middlewares/UserMiddleware");



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})



// Common Middlewares 
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}))

server.use(cookieParser());
server.use(express.static(path.join(__dirname, "public"))) 


// Settings
server.set("view engine", "ejs");


// Routes
 


( async () => {
    const db = await mongodb();
    try {
        server.use( (req, res, next) => { 
            req.db = db;
            next()
        })

        server.use(UserMiddleware)
    } catch (error) {
        console.log(error);
    } finally {
        routes(server)
    }    
})();