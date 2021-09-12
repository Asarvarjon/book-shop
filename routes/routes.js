const HomeRoute = require("./HomeRoute")
const Categories = require("./Categories")
const About = require("./About") 
const Login = require("./Login")
const Register = require("./Register")
const Admin = require("./Admin") 

module.exports = (server) => {
   server.use(HomeRoute.path, HomeRoute.router)
   server.use(Categories.path, Categories.router)
   server.use(About.path, About.router) 
   server.use(Login.path, Login.router) 
   server.use(Register.path, Register.router)
   server.use(Admin.path, Admin.router)

   server.use((req, res) => {
       res.render("error")
   })

}