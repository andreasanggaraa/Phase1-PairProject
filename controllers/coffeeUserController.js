const { CoffeeUser, Coffee } = require ("../models/index.js")

class CoffeeUserController {

    static findAll(req,res){
        let session = req.session
        CoffeeUser.findAll({include: [Coffee]})
            .then(result => {
                res.render('coffeeUser/coffeeUser.ejs', {result, session})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addForm(req,res) {
        Coffee.findAll()
            .then(menus => {
                let session = req.session
                res.render('menuSelection.ejs', { menus, session })
            })
            .catch(err => [
                res.send(err)
            ])
    }

    static createNewEntry(req,res) {
        req.body.createdAt = new Date()
        req.body.updatedAt = new Date()
        req.body.UserId = req.session.loginId
        let id = +req.body.CoffeeId
        Coffee.findByPk(id)
            .then(searched => {
                searched.getStatus
                console.log(searched);
                req.body.order = searched.name
                req.body.price = +searched.sellingPrice

                CoffeeUser.create(req.body)
                    .then(newOrder => {
                        res.redirect('/purchase')
                    })
            })

            .catch(err => {
                res.send(err)
            })
    }

    static updateForm(req,res){
        //an alternative would be to use findbypk
        CoffeeUser.findAll({
            where: {
                id : req.params.id
            }
        })
        .then(function(result){
            res.render("coffeeUser/coffeeUserEdit.ejs", {selectedCoffeeUser: result})
        })
        .catch(function(err){
            res.send(err)
        })
    }


    static orderById(req, res) {
        let id = +req.session.loginId;
        let session = req.session;

        CoffeeUser.findAll({where : {"UserId": id}})
            .then(result => {
                res.render('coffeeUser/purchase.ejs', { result, session })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = CoffeeUserController