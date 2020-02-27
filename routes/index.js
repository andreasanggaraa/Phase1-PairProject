const router = require ("express").Router()
const coffeeUserRoute = require ("./coffeeUserRoute")
// const userRouter = require('./UserRouter.js')
// const coffeeRouter = require('./CoffeeRouter.js')
// const inventoryRouter = require('./InventoryRouter.js')
const LoginController = require('../controllers/LoginController.js')
const authentication = require('../middlewares/authentication.js')
const UserController = require('../controllers/UserController.js')
const InventoryController = require('../controllers/InventoryController')
const CoffeeUserController = require('../controllers/coffeeUserController.js')
const CoffeeController = require('../controllers/CoffeeController.js')

router.get('/', (req, res) => {
    let session = req.session;

    res.render('index.ejs', { session });
})

router.get('/register', (req, res) => {
    let session = req.session
    res.render('register.ejs', { session }) 
})

router.get('/login', (req, res) => {
    let session = req.session
    res.render('login.ejs', { session })
})

router.post('/login', LoginController.login)

// Need authentication first
router.use(authentication)
router.get('/logout', LoginController.logout)

// Admin
router.get('/userlist', UserController.findAll)
router.use('/inventory', InventoryController.findAll)
router.get('/orderlist', CoffeeUserController.findAll)
router.get('/menu', CoffeeController.findAll)


router.get('/order', CoffeeUserController.addForm)
router.post('/order', CoffeeUserController.createNewEntry)

router.get('/purchase', CoffeeUserController.orderById)

router.use('/hackoffee', coffeeUserRoute)


module.exports = router;