const router = require ("express").Router()

route.get('/', CoffeeUserController.showAll)

route.get('/movies/add', routeStudents.addForm)
route.post('/movies/add', routeStudents.createNewEntry)

route.get('/movies/edit/:id', routeStudents.updateForm)
route.post('/movies/edit/:id', routeStudents.updateMovieData)

route.get('/movies/delete/:id', routeStudents.deleteMovies)

// const router = require("express").Router()
// const MainCtrl = require("../controllers/mainCtrl.js")
// const movieRoute = require("./movieRoute.js")
// const phRoute = require("./phRoute.js")
// const castRoute = require("./castRoute.js")

// router.get("/", MainCtrl.showHome)
// router.use("/phs", phRoute)
// router.use("/movies", movieRoute)
// router.use("/casts", castRoute)


module.exports = router