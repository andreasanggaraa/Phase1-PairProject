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
    static addForm(req,res) {
        CoffeeUser.findAll()
        .then(function(result){
            res.render("movieAdd.ejs", { CoffeeUserData : result })
        })
        .catch(function(err){
            res.send(err)
        })
    }
    static createNewEntry(req,res) {
        Movie.create({
            name: req.body.name,
            released_year: req.body.released_year,
            genre: req.body.genre
        })
        .then (function(result){
            res.redirect("/movies")
        })
        .catch (function(err){
            res.send(err)
        })
    }

}

module.exports = CoffeeUserController