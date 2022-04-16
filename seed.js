const { db, Cat, Weight, Food } = require('./client/database')

const seed = async () => {
  try {
    await db.sync({ force: true })

    const sebastian = await Cat.create({
      name: "Sebastian"
    }
    )

    const sebWeight = await Weight.create({
      weight: 4590,
      date: '2020-08-07'
    })

    await sebWeight.setCat(sebastian)

  } catch (err){
    console.log(err);
  }

}

seed();
