const inventoryRouter = require('express').Router()
const InventoryController = require('../controllers/InventoryController.js');

inventoryRouter.get('/', (req, res, next) => {
    if(req.session.role !== "admin") {
        res.redirect('back')
    }
    else {
        next()
    }
}, InventoryController.dashboard)

module.exports = inventoryRouter