function authentication (req, res, next) {
    if(!req.session.isLogin) {
        res.redirect('back')
    }
    else {
        next()
    }
}

module.exports = authentication;