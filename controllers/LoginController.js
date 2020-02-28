const { User } = require('../models/index');

class LoginController {

    static login(req, res) {

        User.findAll({
            where: {
                "username": req.body.username,
                "password": req.body.password
            }
        })
            .then(logged => {
                if(logged.length !== 0) {
                    logged[0].role === "admin" ? req.session.role = "admin" : req.session.role = "customer";
                    req.session.role === "admin" ? req.session.isAdmin = true : req.session.isAdmin = false
                    req.session.msg = `Welcome, ${logged[0].username}`;
                    req.session.isLogin = true;
                    req.session.loginId = logged[0].dataValues.id
                    res.redirect('/');
                }
                else {
                    req.session.role = "Guest";
                    req.session.isLogin = false;
                    req.session.msg = "User / Password invalid!";
                    res.send("Gagal login");
                }
            })

    }

    static logout(req, res) {
        req.session.destroy()
        res.redirect('/')
    }

}

module.exports = LoginController