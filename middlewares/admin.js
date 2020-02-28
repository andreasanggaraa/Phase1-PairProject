function isAdmin (req, res, next) {
    if(!req.session.isAdmin) {
        res.redirect('/')
    }
    else {
        next()
    }
}

module.exports = isAdmin;