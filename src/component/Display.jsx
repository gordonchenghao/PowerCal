import React from "react";
import Log from "./Log";
import Result from "./Result";

function Display(props) {
	return (
		<div className="display">
			<Log log={props.log} />

			<Result result={props.result} />
		</div>
	);
}

export default Display;
