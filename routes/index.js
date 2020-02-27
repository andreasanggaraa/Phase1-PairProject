const router = require ("express").Router()
const coffeeUserRoute = require ("./coffeeUserRoute")
const userRouter = require('./UserRouter.js')
const coffeeRouter = require('./CoffeeRouter.js')
const inventoryRouter = require('./InventoryRouter.js')
const LoginController = require('../controllers/LoginController.js')

router.get('/', (req, res) => {
    let msg = req.session.msg;
    let isLogin = req.session.isLogin;
    let role = req.session.role;
    res.render('index.ejs', { msg, isLogin })
})

router.get('/login', (req,res, next) => {
    next()
    
    let msg = req.session.msg;
    let isLogin = req.session.isLogin;
    let role = req.session.role;

}, (req, res) => {
    let msg = "";
    let isLogin;
    res.render('login.ejs', { msg, isLogin })
})

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