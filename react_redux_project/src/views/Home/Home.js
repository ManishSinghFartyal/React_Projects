import React from 'react';
import { connect } from 'react-redux';
import { fetchNewTime, fetchName } from '../../redux/actionCreators';
import './Home.css';
import Timezone from '../Timezone/Timezone.js'


class Home extends React.Component{
 
  name1 = '';
  constructor(props){   
    super(props)
    this.state = {
      name:''
    }
  }

  updateNameHandle(e){
    this.name1 = e.target.value  
  }

  setNameHandle(){    
    this.setState({
      name:this.name1
    })
    this.props.updateName(this.name1);
  }

  render(){
      return (
        <div className="home">
          
          <Timezone currentTime={this.props.currentTime} updateTime={this.props.updateTime}/>
          <h1> Enter name </h1>
          <p>Name (from local states bindning ): {this.state.name}</p>
          <p>Name (from redux store ): {this.props.currentName.map((value,index)=>{
            return <li key={index}>{value}</li>
          })}</p>
            <input type="text" className="name1" onChange={this.updateNameHandle.bind(this)}/>
          <button onClick={this.setNameHandle.bind(this)}>
            Add
          </button>
        </div>
      );
    }    
}

  function mapStateToProps(state){  
    return {
      currentTime: state.time.currentTime,
      currentName: state.name.currentName
    }
  }

  const mapDispatchToProps ={
    updateName :(x) => fetchName(x),
    updateTime :(x) => fetchNewTime(x)
  }


  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home);
