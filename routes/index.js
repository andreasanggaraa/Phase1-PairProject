const router = require ("express").Router()
const coffeeUserRoute = require ("./coffeeUserRoute")
const coffeeRoute = require ("./coffeeRoute")

router.use('/hackoffee', coffeeUserRoute)

router.use('/coffee', coffeeRoute)

module.exports = router


// =============================================================
// const router = require("express").Router()
// const MainCtrl = require("../controllers/mainCtrl.js")
// const movieRoute = require("./movieRoute.js")
// const phRoute = require("./phRoute.js")
// const castRoute = require("./castRoute.js")

// router.get("/", MainCtrl.showHome)
// router.use("/phs", phRoute)
// router.use("/movies", movieRoute)
// router.use("/casts", castRoute)



// router.get('/movies/add', routeStudents.addForm)
// router.post('/movies/add', routeStudents.createNewEntry)

// router.get('/movies/edit/:id', routeStudents.updateForm)
// router.post('/movies/edit/:id', routeStudents.updateMovieData)

// route.get('/movies/delete/:id', routeStudents.deleteMovies)