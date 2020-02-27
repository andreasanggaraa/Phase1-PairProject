const coffeeRouter = require('express').Router()
const CoffeeController = require('../controllers/CoffeeController.js');

coffeeRouter.get('/', CoffeeController.dashboard)
coffeeRouter.get('/add', CoffeeController.addCoffeeLanding)

module.exports = coffeeRouter