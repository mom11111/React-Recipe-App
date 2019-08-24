import React, { Component } from 'react'
import Navbar from './Navbar';
import Accordian from './Accordian'
export default class App extends Component {
  render() {
    return (
      <div className="main">
          <Navbar />
          <Accordian />
      </div>
      
    )
  }
}
