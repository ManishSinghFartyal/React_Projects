import React from 'react';
import { connect } from 'react-redux';
import { fetchNewTime, fetchName } from '../../redux/actionCreators';


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
    this.props.updateTime(this.name1);
  }

  render(){
      return (
        <div className="home">
          
          
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
    updateTime :(x) => fetchName(x)
  }


  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home);
