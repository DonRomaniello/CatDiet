const express = require('express')
const app = express()
const port = 3000
const ipaddress = "192.168.1.39"
const path = require('path');
const { db, Cat, Weight, Food } = require('../client/database')

app.use(express.static('public'));


app.get('/api/currentfood', async(req, res, next) => {
  try {
    const sebFood = await Food.findAll({
      limit: 1,
      where: {
        catId: 1
      },
      order: [['date', 'DESC']]
    })

    const lunFood = await Food.findAll({
      limit: 1,
      where: {
        catId: 2
      },
      order: [['date', 'DESC']]
    }
    )

    const food = {
      luni: lunFood,
      sebastian: sebFood
    }



    res.send(food)
  } catch (err) {
    next(err)
  }
})

app.get('/api', async(req, res, next) => {
  try {
    const cats = await Cat.findAll()
    res.send(cats)
  } catch(err){
    next(err)
  }
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


