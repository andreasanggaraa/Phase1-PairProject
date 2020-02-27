const inventoryRouter = require('express').Router()
const InventoryController = require('../controllers/InventoryController.js');

inventoryRouter.get('/', InventoryController.dashboard)

module.exports = inventoryRouter