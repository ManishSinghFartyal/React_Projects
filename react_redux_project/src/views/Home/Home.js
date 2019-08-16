import React from 'react';
import { connect } from 'react-redux';
import { fetchNewTime, fetchName } from '../../redux/actionCreators';
import './Home.css';
import Timezone from '../Timezone/Timezone.js'
import NameList from '../NameList/NameList.js'
import Header from '../Header/Header.js'

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
          <Header/>
          <Timezone currentTime={this.props.currentTime} updateTime={this.props.updateTime}/>
          <hr/>
          <div>
          <table className="table">
            <tr>
              <td>
                <input type='text' onChange={this.updateNameHandle.bind(this)}  className="form-control"/><br/>
                <button  className="btn btn-success" onClick={this.setNameHandle.bind(this)}> Add name </button>
              </td>
              <td>
                <NameList currentName={this.props.currentName}/>
              </td>
            </tr>
          </table>
            
          </div>
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
