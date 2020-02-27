const coffeeRoute = require("express").Router()
const CoffeeController = require ("../controller/coffeeController")

coffeeRoute.get("/coffeelist", CoffeeController.findAll)

coffeeRoute.get('/add', CoffeeController.addForm)
coffeeRoute.post('add', CoffeeController.createNewEntry)

module.exports = coffeeRoute