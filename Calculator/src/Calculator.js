import React,{Component} from 'react';
import Timeline from './Component/Timeline/Timeline.js';
import ResultBox from './Component/ResultBox/ResultBox.js';
import Keypad from './Component/Keypad/Keypad.js'
import Progress from './Component/Progress/Progress.js'

class Calculator extends Component{
	constructor(props){
		super(props);
		this.state = {
			input:'',
			operation:'',
			input1:'',
			text:''
		}
	}

	showInput(val){
		const {input}=this.state;
		const newValue = input+val;		
		const {operation} = this.state;
		const {input1} = this.state;
		let {text} =this.state;
		if(operation){
			text = text + val;
		}
		else{
			text = newValue;
		}
		this.setState({
			input:newValue,
			text:text
		});
	}

	operatorClick(operator){
		let t = ' ';
		if(operator == '1'){
			t = '+';
		}else if(operator == '2'){
			t = '-';
		}else{
			t = '/';
		}
		const newText = this.state.text+" "+t+" ";
		this.setState({
			operation:operator,
			input1:this.state.input,
			input:'',
			text:newText
		});	
	}

	output(){
		const {input} = this.state;
		const {input1} = this.state;
		let {operation} = this.state;
		let output = '';
		if(operation == '1')
			output = Number(input)+Number(input1);
		else if(operation == '2')
			output = Number(input1)-Number(input);

		else
			output = Number(input1)/Number(input);

		this.setState({
			input: output
		});
	}

	render(){
		return(
			<div>
				<Timeline title="Calculator" />
				<Progress text={this.state.text}/>
				<ResultBox input={this.state.input}/>
				<Keypad showInput={this.showInput.bind(this)} operatorClick={this.operatorClick.bind(this)} output={this.output.bind(this)}/>
			</div>
		);
	}
}

export default Calculator;