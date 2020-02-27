const router = require ("express").Router()
const coffeeUserRoute = require ("./coffeeUserRoute")
const userRouter = require('./UserRouter.js')
const coffeeRouter = require('./CoffeeRouter.js')
const inventoryRouter = require('./InventoryRouter.js')
const LoginController = require('../controllers/LoginController.js')

router.get('/', (req, res) => {
    let session = req.session
    res.render('index.ejs', {session})
})

router.get('/login', (req, res) => {
    let session = req.session
    res.render('login.ejs', {session})
})

router.get('/register', (req, res, next) => {
    if(!req.session.isLogin) {
        res.redirect('/login')
    }
    else {
        next()
    }
}, (req, res) => {
    res.redirect('/',)
})

router.get('/order', coffeeUserRoute)


router.post('/login', LoginController.login)
router.get('/logout', LoginController.logout)

router.use('/hackoffee', coffeeUserRoute)
router.use('/user', userRouter)
router.use('/coffee', coffeeRouter)
router.use('/inventory', inventoryRouter)

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