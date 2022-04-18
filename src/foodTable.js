import React from "react";
import "regenerator-runtime/runtime";
import axios from 'axios';

export default class Food extends React.Component {
  constructor() {
    super()
    this.state = {food : {}}
  }

  async componentDidMount () {
    try {
    const response = await axios.get('/api/currentFood')

    const food = response.data

    this.setState({food: food})

    }
    catch (err){
      console.log("Couldn't get food from database.")
    }
  }




  render () {
    console.log(this.state.food.food)

    const foods = this.state.food.food

    return (
      // {for (key in food)




      // }

      <div>
        These true kitties.
      </div>
    )



  }

}
