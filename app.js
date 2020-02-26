const Controller = require ("./Controllers/Controller.js")
const express = require('express')
const app = express() // Gunakan express di setiap
const port = 3000 // Tetapkan alamat port

const router = require ("./routes/index.js") 


app.set("view engine", "ejs") // Menyambungkan mvc ke ejs
app.use(express.urlencoded({extended:true})) 

app.use(router) 

app.listen(port, () => console.log(`I love you ${port}!`))
