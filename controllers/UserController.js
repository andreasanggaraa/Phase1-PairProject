const { User } = require('../models/index.js')

class UserController {

    static findAll(req, res) {
        let session = req.session
        User.findAll()
            .then(users => {
                res.render('user/users.ejs', { users, session })
            })
            .catch(err => {
                res.send(err)
            })
    }
    
    static addUserLanding(req, res) {
        let session = req.session
        res.render('register.ejs', { session })
    }

    static addUser(req, res) {
        req.body.createdAt = new Date()
        req.body.updatedAt = new Date()

        User.create(req.body)
            .then(userAdded => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editUserLanding(req, res) {
        let id = +req.params.id
        let session = req.session

        User.findByPk(id)
            .then(toBeEdited => {
                res.render('user/editUser.ejs', {toBeEdited, session})
            })
            .catch(err => {
                res.send(err)
            })

    }

    static editUser(req, res) {
        let id = +req.params.id;

        console.log(id);
        User.update(req.body, { where: {id} })
            .then(edited => {
                res.redirect('/userlist')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        let id = +req.params.id

        User.destroy({where: {id}})
            .then(deleted => {
                res.redirect('userlist')
            })
            .catch(err => {
                res.send(err)
            })
    }

}

module.exports = UserController