import React from 'react';
import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import { fetchNewTime, fetchName } from '../../redux/actionCreators';

const methods = {
 componentDidMount(props){
    const x = props.updateTime;
    x();
      const state = {
        name: props.currentName
      }
     console.log(state)
    }
  };


const About = (props) =>{
       const state = {
        name: props.currentName
      } 
      return(
    <form className='about' onLoad={props.updateTime}>
        <h2> About route </h2>
        <h1>Name :  {state.name}  </h1>
    </form> 
    )
    }



const mapStateToProps = state => {  
  return {
    currentTime: state.time.currentTime,
    currentName: state.name.currentName
  }
}

const mapDispatchToProps = dispatch => ( {    
  updateTime: () => dispatch(fetchName())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(lifecycle(methods)(About));
