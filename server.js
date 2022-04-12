const express = require('express')
require('dotenv').config();
const cors = require('cors');
const app = express()
const port = process.env.PORT
const connectDB = require('./config/connectDb');


//DB Connexion
connectDB()

//middleware
app.use(cors())
app.use("/api/stickers",require('./routes/stickers.route'))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))