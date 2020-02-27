const coffeeUserRoute = require("express").Router()
const CoffeeUserController = require ("../controller/coffeeUserController")

coffeeUserRoute.get("/orderlist",CoffeeUserController.findAll)

coffeeUserRoute.get('/orderlist/add', CoffeeUserController.addForm)
coffeeUserRoute.post('/orderlist/add', CoffeeUserController.createNewEntry)

module.exports = coffeeUserRoute

// =========================================================
// const movieRoute = require("express").Router()
// const MovieCtrl = require("../controllers/movieCtrl.js")

// movieRoute.get("/", MovieCtrl.findAll)

// movieRoute.get("/add", MovieCtrl.createForm)
// movieRoute.post("/add", MovieCtrl.create)

// movieRoute.get("/edit/:id", MovieCtrl.editForm)
// movieRoute.post("/edit/:id", MovieCtrl.edit)



// movieRoute.get("/delete/:id", MovieCtrl.delete)

// movieRoute.get("/addCast/:id", MovieCtrl.addCastForm)
// movieRoute.post("/addCast/:id", MovieCtrl.addCast)


// module.exports = movieRoute