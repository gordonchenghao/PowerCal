import React from "react";

function Key(props) {
	return (
		<button
			className={props.btnClassName}
			onClick={()=>{props.keyPress(props.keyLog, props.math)}}
		>
			{props.name}
		</button>
	);
}

export default Key;
