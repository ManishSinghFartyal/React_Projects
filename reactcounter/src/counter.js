import React,{Component} from 'react';


class Counter extends Component{
	constructor(props){
		super(props)
		this.state = {
			hits : 0,
			total_length : 0
		}	
	}

	changeTotalLength(event){
		this.setState({
			total_length: event.target.value.length
		});
	}	
	
	changeHits(event){
		this.setState({
			hits : this.state.hits+1
		});
	}	

	reset(event){
		this.setState({
			hits:0,
			total_length:0,
		})
	}

	render(){
		return(
			<div>
				<br/><br/><br/><br/>
				<input 
					type='text'
					className="textin"
					onChange={this.changeTotalLength.bind(this)}
					onKeyDown = { this.changeHits.bind(this)} />
				<br/><br/><br/><br/>
				<h3>Length of text = {this.state.total_length}</h3>
				<h3>Total Hits = {this.state.hits}</h3>
				<button onClick={this.reset.bind(this)}>Reset</button>
			</div>
		)		
	}
}

export default Counter;