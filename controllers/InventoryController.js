const { Inventory } = require('../models/index.js')

class InventoryController {

    static dashboard(req, res) {
        Inventory.findAll()
            .then(Inventories => {
                res.send(Inventories)
            })
            .catch(err => {
                res.send(Inventories)
            })
    }
    
    static addInventoryLanding(req, res) {
        res.render('Inventory/addInventory.ejs')
    }

    static addInventory(req, res) {
        req.body.createdAt = new Date()
        req.body.updatedAt = new Date()

        Inventory.create(req.body)
            .then(InventoryAdded => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editInventoryLanding(req, res) {
        let id = +req.params.id

        Inventory.findByPk(id)
            .then(toBeEdited => {
                res.render('Inventory/editInventory.ejs', toBeEdited)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static editInventory(req, res) {
        let id = +req.params.id;

        Inventory.update( { where: { id } })
            .then(edited => {
                res.render('Inventory/Inventories.ejs')
            })
            .catch(err => {
                res.send(err)
            })
    }

}

module.exports = InventoryController