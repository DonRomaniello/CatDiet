import React from "react";

import Food from './foodTable.js'
import Graph from './graph.js'

export default class Root extends React.Component{

  render() {

    return (
      <div>
      <Food />
      <Graph />
      </div>
    )
    }
  }
