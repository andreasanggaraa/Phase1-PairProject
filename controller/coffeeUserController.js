const CoffeeUser = require ("../models").CoffeeUser

class CoffeeUserController {
    //Jangan sampai nama const dan class sama
    static findAll(req,res){
        CoffeeUser.findAll()
        .then(function(result){
            console.log(result)
            res.render("CoffeeUser.ejs", { coffeeUserData : result})
        })
        .catch(function(err){
            res.send(err)
        })
    } 
}

module.exports = CoffeeUserController