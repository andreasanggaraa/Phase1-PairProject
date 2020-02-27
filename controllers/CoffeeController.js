const { Coffee } = require('../models/index.js')

class CoffeeController {

    static dashboard(req, res) {
        Coffee.findAll()
            .then(menu => {
                res.send(menu)
            })
            .catch(err => {
                res.send(menu)
            })
    }

    static addCoffeeLanding(req, res) {
        res.render('coffee/addCoffee.ejs')
    }

    static addCoffee(req, res) {
        req.body.createdAt = new Date()
        req.body.updatedAt = new Date()
        Coffee.create(req.body)
            .then(addedCoffee => {
                res.render('coffee/coffee.ejs')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editCoffeeLanding(req, res) {
        let id = +req.params.id;

        Coffee.findByPk(id)
            .then(toBeEdited => {
                res.render('coffee/addCoffee.ejs', { toBeEdited });
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editCoffee(req, res) {
        let id = +req.params.id
        req.body.updatedAt = new Date()

        Coffee.update({ where: { id } })
            .then(edited => {
                res.render('/coffee/coffees.ejs', { edited })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteCoffee(req, res) {
        let id = +req.params.id
        
        Coffee.destroy( { where: {id} })
            .then(deleted => {
                res.render('coffee/coffee.ejs')
            })
            .catch(err => {
                res.send(err)
            })
    }


}

module.exports = CoffeeController