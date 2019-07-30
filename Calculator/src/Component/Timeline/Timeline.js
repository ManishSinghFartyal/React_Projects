import React,{Component} from 'react';
import './Timeline.css';
class Timeline extends Component{
	render(){
		return(
			<div className="panel">
				<div className="header">
					<span>{this.props.title}</span>
				</div>
			</div>
		);
	}
}

export default Timeline;