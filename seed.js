const { db, Cat, Weight, Food } = require('./client/database')


const luniWeights = {
  '2020-08-07': 3350,
  '2020-08-11': 2990,
  '2020-08-20': 3030,
  '2020-09-04': 3160,
  '2020-09-10': 3280,
  '2020-09-20': 3230,
  '2020-09-27': 3350,
  '2020-10-04': 3310
}

const sebastianWeights = {
  '2020-08-07': 4590,
  '2020-08-11': 4570,
  '2020-08-20': 4550,
  '2020-09-04': 4780,
  '2020-09-10': 4800,
  '2020-09-20': 4810,
  '2020-09-27': 4870,
  '2020-10-04': 4890
}







const seed = async () => {
  try {
    await db.sync({ force: true })


    const sebastian = await Cat.create({
      name: "Sebastian"
    }
    )

    const luni = await Cat.create({
      name: "Luni"
    }
    )

    for (date in sebastianWeights) {
      const sebWeight = await Weight.create({
        weight: sebastianWeights[date],
        date
      })

      await sebWeight.setCat(sebastian)

    }


    for (date in luniWeights) {
      const lunWeight = await Weight.create({
        weight: luniWeights[date],
        date
      })

      await lunWeight.setCat(luni)

    }

  } catch (err){
    console.log(err);
  }

}

seed();
