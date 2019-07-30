import React,{Component} from 'react';
import './Keypad.css';

class Keypad extends Component{

    buttonClick(e){        
        const val=e.target.value;
        const {showInput} = this.props;
        showInput(val);
    }

    operatorClick(e){
        const operator=e.target.value;
        const operation = this.props.operatorClick;
        console.log(operator+" kjhsajk");
        operation(operator);
    }

    showOutput(e){
      const {output}=this.props;
      output();
    }

    render(){
        return(
              <div className="panel">
                <div className="container">
                  <ul id="keyboard">   
                    <li className="letter" value='1' onClick={this.buttonClick.bind(this)}>1</li>  
                    <li className="letter" value='2' onClick={this.buttonClick.bind(this)}>2</li>  
                    <li className="letter" value='3' onClick={this.buttonClick.bind(this)}>3</li>  
                    <li className="letter" value="1" onClick={this.operatorClick.bind(this)}>+</li>  
                    <li className="letter clearl" value='4' onClick={this.buttonClick.bind(this)}>4</li>  
                    <li className="letter" value='5' onClick={this.buttonClick.bind(this)}>5</li>  
                    <li className="letter" value='6' onClick={this.buttonClick.bind(this)}>6</li>
                    <li className="letter" value='2' onClick={this.operatorClick.bind(this)}>-</li>  
                    <li className="letter clearl" value='7' onClick={this.buttonClick.bind(this)}>7</li>  
                    <li className="letter " value='8' onClick={this.buttonClick.bind(this)}>8</li>  
                    <li className="letter" value='9' onClick={this.buttonClick.bind(this)}>9</li>  
                    <li className="letter" value='0' onClick={this.buttonClick.bind(this)}>0</li>
                    <li className="switch">abc</li>  
                    <li className="return">retur</li>
                    <li className="letter" onClick={this.showOutput.bind(this)}>=</li>

                   </ul>  
                 </div>
              </div>
        );
    }
}

export default Keypad;