const express = require('express')
const app = express() // Gunakan express di setiap
const port = 3003 // Tetapkan alamat port
const session = require('express-session');

const router = require ("./routes/index.js") 

app.set("view engine", "ejs") // Menyambungkan mvc ke ejs
app.use(express.static('public'))
app.use(session({
    secret: 'hacktiv8',
    resave: false,
    saveUninitialized: false
  }))
   
app.use(express.urlencoded({extended:true})) 

app.use(router) 

app.listen(port, () => console.log(`I love you ${port}!`))
