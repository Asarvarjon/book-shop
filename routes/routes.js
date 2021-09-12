const HomeRoute = require("./HomeRoute")
const Categories = require("./Categories")
const About = require("./About")
const Contact = require("./Contact")




module.exports = (server) => {
   server.use(HomeRoute.path, HomeRoute.router)
   server.use(Categories.path, Categories.router)
   server.use(About.path, About.router)
   server.use(Contact.path, Contact.router)

}