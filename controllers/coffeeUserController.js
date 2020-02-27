const { CoffeeUser, Coffee } = require ("../models/index.js")

class CoffeeUserController {
    static findAll(req,res){
        CoffeeUser.findAll()
        .then(function(result){
            console.log(result)
            res.render("coffeeUser/coffeeUser.ejs", { coffeeUserData : result})
        })
        .catch(function(err){
            res.send(err)
        })
    }

    static addForm(req,res) {
        Coffee.findAll()
        .then (function(menus){            
            res.render('menuSelection.ejs', { menus : menus })
        })
        .catch (function(err){
            res.send(err)
        })
    }

    static createNewEntry(req,res) {
        CoffeeUser.create({
            UserId : req.body.UserId,
            CoffeeId : req.body.CoffeeId,
            order: "TKTK",
            status: "TKTK",
            price: 17000
        })
        .then (function(result){
            // console.log("============")
            // console.log(result)
            res.redirect("/hackoffee/orderlist")
        })
        .catch (function(err){
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
    static updateCoffeeUserData(req,res){
        CoffeeUser.update({
            //pakai req.body untuk ambil hasil form sebelumnya
            userId : req.body.name,
            CoffeeId : req.body.released_year,
            order: req.body.genre,
            status: "TKTK",
            price: "TKTK"
            }, { where: 
                {
                    id : req.params.id
                }
            })
        .then(function(result){
            res.redirect("/hackoffee/orderlist")
        })
        .catch(function(err){s
            res.send(err)
        })
    }
    static deleteCoffeeUser(req,res){
        CoffeeUser.destroy({
            where: {
                id: req.params.id
            }
        })
        //also a promise, need then and catch
        .then (function(result){
            res.redirect("/hackoffee/orderlist")
        })
        .catch(function(err){
            res.send(err)
        })
    }
}

module.exports = CoffeeUserController