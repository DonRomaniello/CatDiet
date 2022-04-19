import React from "react";
import "regenerator-runtime/runtime";
import axios from 'axios';

export default class Food extends React.Component {
  constructor() {
    super()
    this.state = {luni: {},
                  sebastian: {}}
  }

  async componentDidMount () {
    try {
    const response = await axios.get('/api/currentFood')

    const {luni, sebastian} = response.data



    this.setState({ luni, sebastian})

    }
    catch (err){
      console.log("Couldn't get food from database.")
    }
  }




  render () {

    console.log(this.state.luni.wellness)

    //console.log(luni)

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Luni</th>
              <th>Sebastian</th>
              <th>Combined</th>
            </tr>
            <tr>
              <td>Hash</td>
              <td>{this.state.luni.wellness}</td>
              <td>{this.state.sebastian.wellness}</td>
              <td>{this.state.luni.wellness + this.state.luni.wellness}</td>
            </tr>
            <tr>
              <td>Chicken</td>
            </tr>
            <tr>
              <td>Dry</td>
            </tr>
          </tbody>
        </table>
      </div>
    )



  }

}
