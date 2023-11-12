const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi There, This is Habib, Everything is working Fine.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})