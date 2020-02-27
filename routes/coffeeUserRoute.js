const coffeeUserRoute = require("express").Router()
const CoffeeUserController = require ("../controllers/coffeeUserController")

coffeeUserRoute.get("/orderlist", CoffeeUserController.findAll)
coffeeUserRoute.get("/order", CoffeeUserController.orderLanding)

coffeeUserRoute.get('/orderlist/add', CoffeeUserController.addForm)
coffeeUserRoute.post('/orderlist/add', CoffeeUserController.createNewEntry)

coffeeUserRoute.get('/orderlist/update/:id', CoffeeUserController.updateForm)
coffeeUserRoute.post('/orderlist/update/:id', CoffeeUserController.updateCoffeeUserData)

// coffeeUserRoute.get('/orderlist/delete/:id', CoffeeUserController.deleteCoffeeUser)

module.exports = coffeeUserRoute