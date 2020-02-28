const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const session = require('express-session');
app.use(express.static('public'))

const router = require ("./routes/index.js") 

app.set("view engine", "ejs") // Menyambungkan mvc ke ejs
app.use(session({
  secret: 'hacktiv8',
  resave: false,
  saveUninitialized: false
}))

app.use(express.urlencoded({extended:true})) 

app.use(router) 

app.listen(port, () => console.log(`Server Starts on ${port}`))
