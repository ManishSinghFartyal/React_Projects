import React,{Component} from 'react';
import './Progress.css';
class Progress extends Component{
    render(){
        if(this.props.text){
        return(
            <div className='panel'>
                <input type="text" className="progressText" disabled="true" value={this.props.text} />
            </div>
        );  
        }
        else{
            return(
            <div></div>
            );
        }
    }
}

export default Progress;