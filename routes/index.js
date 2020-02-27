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
router.post('/register', UserController.addUser)

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
router.get('/orderlist', CoffeeUserController.completedOrder)
router.get('/menu', CoffeeController.findAll)

router.get('/orderList/:orderId/accept', CoffeeUserController.acceptOrder)
router.get('/orderList/:orderId/prepare', CoffeeUserController.prepareOrder)
router.get('/orderList/:orderId/serve', CoffeeUserController.finishedOrder)
router.get('/orderList/:orderId/remove', CoffeeUserController.delete)

router.get('/order', CoffeeUserController.addForm)
router.post('/order', CoffeeUserController.createNewEntry)

router.get('/history', CoffeeUserController.orderById)
router.use('/hackoffee', coffeeUserRoute)

router.get('/report', CoffeeUserController.report)
router.get('/redeem/:id', CoffeeUserController.redeem)
router.get('/delete/:id', UserController.delete)
router.get('/edit/:id', UserController.editUserLanding)
router.post('/edit/:id', UserController.editUser)


module.exports = router;
