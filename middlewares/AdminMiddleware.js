module.exports = async function AdminMiddleware(req, res, next) {
    if(!req.user) {
        res.redirect("/")
    } else {
        next()
    }
}