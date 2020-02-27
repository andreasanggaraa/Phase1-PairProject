const { CoffeeUser } = require ("../models/index.js")

class CoffeeUserController {

    static findAll(req,res){

        CoffeeUser.findAll()
            .then(function(result){
                res.render("CoffeeUser.ejs", { coffeeUserData : result})
            })
            .catch(function(err){
                res.send(err)
            })
    } 
}

module.exports = CoffeeUserController