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

const sebastianFoods = [
  { date: '2022-03-03',
   wellness: 35,
   weruva: 24,
   dry: 9
  },
  { date: '2022-02-11',
   wellness: 36,
   weruva: 26,
   dry: 9
  }
]

const luniFoods = [
  { date : '2022-03-03',
    wellness: 25,
    weruva: 17,
    dry: 7
  },
  { date: '2022-02-11',
   wellness: 17,
   weruva: 24,
   dry: 7
  }
]




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

    for (entry in sebastianFoods){
      const sebastianFood = await Food.create(
        sebastianFoods[entry]
      )

      await sebastianFood.setCat(sebastian)
    }

    for (entry in luniFoods){
      const luniFood = await Food.create(
        luniFoods[entry]
      )

      await luniFood.setCat(luni)

    }


  } catch (err){
    console.log(err);
  }

}

seed();
