import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AlgSets extends Component {
  render() {
    return <div className="container">
      <h1>AlgSets</h1>
      <Link to="/alg_sets/pll">PLL</Link>
      <br/>
      <Link to="/alg_sets/oll">OLL</Link>
    </div>
  }
}

export default AlgSets
