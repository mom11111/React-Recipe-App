import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
export default class App extends Component {
   state={
      name:"banana",
     appid:"f9797d00",
     appkey:"f68ba8f59ddbcae07adc32205849e7a7",
     addrec:[]
   };


  handlechange=(e)=>{
    //console.log(e);
      this.setState({
        name:e.target.value
      })
  }
  
  handlesubmit=(e)=>{
    e.preventDefault();
   //console.log(this.state.name);
      axios.get(`https://api.edamam.com/search?q=${this.state.name}&app_id=${this.state.appid}&app_key=${this.state.appkey}`).then(res=>{
        const addrec=res.data.hits;
        //console.log(addrec);
        this.setState({
          addrec:addrec
        })
        //console.log(this.state.addrec);
        this.props.addrecep(this.state.addrec);
      })
 }

 
  
  render() {
    return (
      <form onSubmit={this.handlesubmit} id="formstyle">
        <input type="text"  onChange={this.handlechange} id="name" placeholder="eg:chicken" />
        <button type="submit" value="submit" id="button">search</button>
      </form>
    )
  }
}
