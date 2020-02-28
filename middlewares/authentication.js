function authentication (req, res, next) {
    if(!req.session.isLogin) {
        res.redirect('/')
    }
    else {
        next()
    }
}

module.exports = authentication;