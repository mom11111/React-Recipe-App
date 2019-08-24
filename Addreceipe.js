import React, { Component } from 'react'
import App from './App';
import Makereceipe from './Makereceipe'
export default class Addreceipe extends Component {
    state={
        addreceipe:[]
    }

  addrecep=(receipe)=>{
      this.setState({
        addreceipe:receipe
      })
  }



    render() {
        return (
            <div>
              <App addrecep={this.addrecep}   />
              <Makereceipe addreceipe={this.state.addreceipe} />          
            </div>
        )
    }
}
