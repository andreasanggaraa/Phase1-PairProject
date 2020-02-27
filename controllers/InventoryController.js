const { Inventory } = require('../models/index.js')

class InventoryController {

    static findAll(req, res) {
        let session = req.session
        
        Inventory.findAll()
            .then(inventories => {
                console.log(inventories[0].dataValues);
                res.render('inventory/inventories.ejs', {inventories, session})
            })
            .catch(err => {
                res.send(err)
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