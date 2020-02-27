const { CoffeeUser, Coffee, Inventory } = require ("../models/index.js")
const getRupiah = require('../helper/getRupiah')

class CoffeeUserController {

    static findAll(req,res){
        let session = req.session
        CoffeeUser.findAll({include: [Coffee]})
            .then(result => {
                res.render('coffeeUser/coffee,rupiah.length-1User.ejs', {result, session})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static completedOrder(req, res) {
        let session = req.session
        CoffeeUser.findAll({where: {"isReady": false}})
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
                req.body.order = searched.name
                req.body.price = +searched.sellingPrice

                CoffeeUser.create(req.body)
                    .then(newOrder => {
                        res.redirect('/history')
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

    static delete(req, res) {
        let id = +req.params.orderId
        CoffeeUser.destroy({where: {id}})
            .then(result => {
                res.redirect('back')
            })
            .catch(err => {
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

    static acceptOrder(req, res) {
        let id = +req.params.orderId
        let condition = {isAccepted: true}
        
        CoffeeUser.update(condition, {where: {id}})
            .then(result => {
                res.redirect('back')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static prepareOrder(req, res) {
        let id = +req.params.orderId
        let condition = {isPrepared: true}
        
        CoffeeUser.update(condition, {where: {id}})
            .then(result => {
                res.redirect('back')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static finishedOrder(req, res) {
        let id = +req.params.orderId
        let condition = {isReady: true}
        
        CoffeeUser.findAll({where: {id}, include:[Coffee]})
            .then(result => {
                CoffeeUser.update(condition, {where: {id}, include: [Coffee]})
                    .then((updated) => {
                        let espresso = result[0].Coffee.espresso
                        let milk = result[0].Coffee.milk
                        let ice = result[0].Coffee.ice
                        let cup = 1
                        let sugar = result[0].Coffee.sugar
                        return Inventory.decrement({espresso, milk, ice, cup, sugar}, {where: {id: 1}})
                    })

                    .then(updated => {
                        res.redirect('back')
                    })

                    .catch(err => {
                        console.log(err);
                        res.send(err)
                    })
            })
    }

    static report(req, res) {
        let session = req.session;

        CoffeeUser.findAll({where: {"isReady": true}})
            .then(result => {
                CoffeeUser.sum("price", {where: {"isReady": true}})
                    .then(sales => {
                        sales = getRupiah(sales)
                        res.render('coffeeUser/report.ejs', {result, session, sales})
                    })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = CoffeeUserController