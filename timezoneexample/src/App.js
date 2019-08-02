import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timezone from './Timezone.js';

class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state = {
      currentTime:null, msg:'now',tz:'UTC'
    }
  }

  fetchCurrentTime(){
    const url = this.getAPIUrl();
    fetch(url)
    .then(resp => resp.json())
    .then(resp => {
      const currentTime = resp.dateString;
      this.setState({currentTime})
    })
  }

  getAPIUrl(){
    const {tz,msg} = this.state;
    const url = 'https://andthetimeis.com';
    return url+'/'+tz+'/'+msg+'.json';
  }

  handleChange(newState){
    console.log("handleChange")
    this.setState(newState);
  }

  handleSubmit(){
    this.fetchCurrentTime();
  }

  render(){
    const {tz,msg} = this.state;
    return(
      <Timezone tz={tz} msg={msg} onFormChange={this.handleChange.bind(this)} onFormSubmit={this.handleSubmit.bind(this)} currentTime={this.state.currentTime}/>
    )
  }
}

export default App;
