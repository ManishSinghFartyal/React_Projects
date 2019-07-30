import React,{Component} from 'react';
import Timeline from './Component/Timeline/Timeline.js';
import ResultBox from './Component/ResultBox/ResultBox.js';
import Keypad from './Component/Keypad/Keypad.js'

class Calculator extends Component{
	constructor(props){
		super(props);
		this.state = {
			input:'',
			operation:'',
			input1:''
		}
	}

	showInput(val){
		const {input}=this.state;
		const newValue = input+val;
		this.setState({
			input:newValue
		});
	}

	operatorClick(operator){
		this.setState({
			operation:operator,
			input1:this.state.input,
			input:''
		});	
	}

	output(){
		const {input} = this.state;
		const {input1} = this.state;
		let {operation} = this.state;
		console.log(operation);
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
				<ResultBox input={this.state.input}/>
				<Keypad showInput={this.showInput.bind(this)} operatorClick={this.operatorClick.bind(this)} output={this.output.bind(this)}/>
			</div>
		);
	}

}

export default Calculator;