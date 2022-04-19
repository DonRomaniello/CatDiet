import React from "react";
import "regenerator-runtime/runtime";
import axios from 'axios';

export default class Graph extends React.Component {
  constructor() {
    super()
    this.state = {luni: {},
                  sebastian: {}}
  }

  // async componentDidMount () {
  //   try {
  //   const response = await axios.get('/api/currentFood')

  //   const {luni, sebastian} = response.data

  //   this.setState({ luni, sebastian})

  //   }
  //   catch (err){
  //     console.log("Couldn't get food from database.")
  //   }
  // }




  render () {

    // const wellCal = 1.152
    // const werCal = .673
    // const dryCal = 4.36

    // const luni = this.state.luni
    // const sebastian = this.state.sebastian

    // const luniCal = ((luni.wellness * wellCal)
    //                   + (luni.weruva * werCal)
    //                   + (luni.dry * dryCal))

    // const sebastianCal = ((sebastian.wellness * wellCal)
    //                   + (sebastian.weruva * werCal)
    //                   + (sebastian.dry * dryCal))

    return (
      <div>
        Graph goes here.
        {/* <table>
          <tbody>
            <tr>
              <th></th>
              <th>Luni</th>
              <th>Sebastian</th>
              <th>Combined</th>
            </tr>
            <tr>
              <td>Hash</td>
              <td>{luni.wellness}</td>
              <td>{sebastian.wellness}</td>
              <td>{luni.wellness + sebastian.wellness}</td>
            </tr>
            <tr>
              <td>Chicken</td>
              <td>{luni.weruva}</td>
              <td>{sebastian.weruva}</td>
              <td>{luni.weruva + sebastian.weruva}</td>
            </tr>
            <tr>
              <td>Dry</td>
              <td>{luni.dry}</td>
              <td>{sebastian.dry}</td>
              <td>{luni.dry + sebastian.dry}</td>
            </tr>
            <tr>
              <td>kCal/day</td>
              <td>{luniCal}</td>
              <td>{sebastianCal}</td>
              <td>{luniCal + sebastianCal}</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    )



  }

}
