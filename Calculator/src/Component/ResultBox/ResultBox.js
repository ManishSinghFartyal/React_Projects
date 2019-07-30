import React,{Component} from 'react';
import './ResultBox.css';

class ResultBox extends Component{
    render(){
        return(
               <div className='panel'>
                  <input type='text' className="inputText" disabled value={this.props.input}/>
               </div> 
            
            );
    }
}

export default ResultBox;