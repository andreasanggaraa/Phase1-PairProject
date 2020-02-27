const Coffee = require ("../models").Coffee

class CoffeeController {
    //Jangan sampai nama const dan class sama
    static findAll(req,res){
        Coffee.findAll()
        .then(function(result){
            // console.log(result)
            res.render("Coffee.ejs", { coffeeData : result})
        })
        .catch(function(err){
            res.send(err)
        })
    }
    static addForm(req,res) {
        Coffee.findAll()
        .then(function(result){
            res.render("CoffeeAdd.ejs", { CoffeeData : result })
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

module.exports = CoffeeController