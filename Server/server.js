const express = require('express');
const Router = require('./router');
const cors = require('cors')
const app = express()

app.use(express.static('public'))
app.use('*', express.static('public'))
app.use(cors())
app.use(express.json())

Router(app)
app.listen(4000, () => {console.log(`Server Is Runing In Port 4000!`);})
 