import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {increase_text_length, maintain_hits, resetAll} from './redux/actionCreator.js'

class App extends React.Component {

  constructor(props){
    super(props)
  }

  changeTotalLength(event){
    let len = event.target.value.length
    this.props.updateLength(len);
  }

  changeHits(){
    let hits = this.props.total_hits + 1
    this. props.updateHits(hits);
  }

  render(){
  return (
    <div className="App">
        <br/><br/><br/><br/>
        <input 
          type='text'
          className=" form form-group textin"
          onChange={this.changeTotalLength.bind(this)}
          onKeyDown = { this.changeHits.bind(this)} />
        <br/><br/><br/><br/>
        <h3>Length of text = {this.props.text_length}</h3>
        <h3>Total Hits = {this.props.total_hits}</h3>
        <button onClick={this.props.resetAll} className="btn btn-danger"> Reset </button>
    </div>
 );
  }
}

const mapStateToProps = state => {
  return {
    text_length: state.text_length,
    total_hits: state.total_hits
  }
}

const mapDispatchToProps = dispatch => ({
  updateHits: hits => dispatch(maintain_hits(hits)),
  updateLength: len => dispatch(increase_text_length(len)),
  resetAll : () => dispatch(resetAll())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,

)(App);
