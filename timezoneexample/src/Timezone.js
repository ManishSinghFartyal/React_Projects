import React,{Component} from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
const timezoneType = ['PST','MST','MDT','EST','UTC'];

class Timezone extends Component{

    constructor(props){
        super(props)
        const {tz,msg} = this.props;
        this.state = {tz,msg}
    }

    changeTimezone(e){
        console.log("Change timezone")
        const tz=e.target.value;
        this.setState({tz},this.handleChange)
    }

    handleChange(e){
        console.log("handleChange of timezone")
        typeof this.props.onFormChange === 'function' &&
        this.props.onFormChange(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("handle submit of timezone")
        typeof this.props.onFormChange === 'function' &&
        this.props.onFormSubmit();
    }
    
    render(){
        const {tz} = this.props;
        return(
            <form className="card form container" onSubmit={this.handleSubmit.bind(this)}>
                <select defaultValue={tz} onChange={this.changeTimezone.bind(this)}>
                    {timezoneType.map(time => {
                        return (<option key={time} value={time}>{time}</option>)
                    })}
                </select>
                <br/>
                <input className='textb' type="text" placeholder={this.props.currentTime} disabled/>
                <br/>
                <input type="submit" className="btn btn-success" value="Update request"/>
            </form>
        );
    }
}

export default Timezone;
