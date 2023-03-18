const express = require('express')
const app = express()
const PORT = require('./src/config/index').PORT || 5000
const routes = require('./src/routes/route')
const layout = require('express-ejs-layouts')
require('./src/db/connect')

app.set("view engine",'ejs')
app.set('views','./src/views')

app.use(express.static('./src/static'));

app.use(layout)

app.set('layout', 'base.ejs');

app.use(routes)

app.listen(PORT,()=>console.log(`listening on port ${PORT}`))