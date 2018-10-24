const express = require('express')
const app = express() 
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'app/public')))


app.listen(PORT, () => console.log(`App listening on: ${PORT}`))
