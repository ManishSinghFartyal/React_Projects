import React from 'react';
import {connect} from 'react-redux';

const Timezone = (props) => {
    return (
        <div>
            <h3>Welcome</h3>
            <p>Current time : {props.currentTime}</p>
            <button onClick={props.updateTime}>Update time</button>
        </div>
        );
   }

export default Timezone;
