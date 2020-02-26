const CoffeeUser = require ("../models").CoffeeUser

class CoffeeUser {
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