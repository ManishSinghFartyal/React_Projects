import React from 'react';

const NameList = (props) => {
	return(
		<div class="list">
			<p><b>Name (from redux store ): </b> {props.currentName.map((value,index)=>{
            return <li key={index}>{value}</li>
          })}</p>

		</div>
	)
}

export default NameList;