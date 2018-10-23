const app = require('express')()
const path = require('path')
const PORT = process.env.PORT || 3000


// app.get(`/`, function (req, res) {
//   res.sendFile(path.join(__dirname, `index.html`))
// })


app.listen(PORT, () => console.log(`App listening on: ${PORT}`))
