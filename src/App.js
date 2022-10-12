import React, { useEffect } from "react";
import "./App.css";
import Display from "./component/Display";
import Keyboard from "./component/Keyboard";

const math = require("mathjs");
const he = require("he");

function App() {
	//set State
	const [calculator, setCalculator] = React.useState({
		result: 0,
		log: "",
		clickedEquals: false,
		ans: 0,
		memory: 0,
	});
	//display syntax error
	window.addEventListener("error", () => {
		setCalculator((prev) => {
			prev[`log`] = "Syntax Error";
			prev[`clickedEquals`] = true;
			return { ...prev };
		});
	});

	useEffect(() => {
		window.addEventListener("keydown", keyDown);
		return () => window.removeEventListener("keydown", keyDown);
	});

	//handle keyboard input
	function keyDown(e) {
		const currentLog = calculator.log;
		const clickedEquals = calculator.clickedEquals;
		e.preventDefault();

		if (e.key === "Enter") {
			handleEqualsClick(currentLog);
		}

		if (e.key.match(/[\+\-\^\*\/]/)) {
			setCalculator((prev) => {
				let keyLog;
				if (e.key === "*") {
					keyLog = he.decode("&times;");
				} else if (e.key === "/") {
					keyLog = he.decode("&divide;");
				} else {
					keyLog = e.key;
				}

				if (clickedEquals) {
					prev[`log`] = `Ans${keyLog}`;
					prev[`clickedEquals`] = false;
				} else {
					prev[`log`] = currentLog + keyLog;
				}
				return { ...prev };
			});
		}

		if (e.key.match(/[0-9]|[\(\)\.]/)) {
			setCalculator((prev) => {
				if (clickedEquals) {
					prev[`log`] = e.key;
					prev[`clickedEquals`] = false;
				} else {
					prev[`log`] = currentLog + e.key;
				}
				return { ...prev };
			});
		}

		if (e.key === "Backspace") {
			let lastElementLength;
			if (currentLog.slice(-4, -1).match(/sin|cos|tan|log/)) {
				lastElementLength = 4;
			} else if (currentLog.slice(-3, -1) === "ln") {
				lastElementLength = 3;
			} else {
				lastElementLength = 1;
			}
			setCalculator((prev) => {
				prev[`log`] = currentLog.slice(0, -lastElementLength);
				return { ...prev };
			});
		}
	}

	//handle virtual button input
	function keyPress(keyLog, math) {
		const currentLog = calculator.log;
		const clickedEquals = calculator.clickedEquals;
		const currentMemory = calculator.memory;
		const currentResult = calculator.result;

		if (math === "clear") {
			setCalculator((prev) => {
				prev[`log`] = "";
				prev[`result`] = 0;
				return { ...prev };
			});
		}

		if (math === "delete") {
			let lastElementLength;
			if (currentLog.slice(-4, -1).match(/sin|cos|tan|log/)) {
				lastElementLength = 4;
			} else if (currentLog.slice(-3, -1) === "ln") {
				lastElementLength = 3;
			} else {
				lastElementLength = 1;
			}
			setCalculator((prev) => {
				prev[`log`] = currentLog.slice(0, -lastElementLength);
				return { ...prev };
			});
		}

		if (math === "equals") {
			handleEqualsClick(currentLog);
		}

		if (math.match(/trig|log|number|comma|prnths|ans|sqrt|exponent|sqr/)) {
			setCalculator((prev) => {
				if (clickedEquals) {
					prev[`log`] = keyLog;
					prev[`clickedEquals`] = false;
				} else {
					prev[`log`] = currentLog + keyLog;
				}
				return { ...prev };
			});
		}

		if (math.match(/sum|sub|multiply|divide|power|inv|sqr/)) {
			setCalculator((prev) => {
				if (clickedEquals) {
					prev[`log`] = `Ans${keyLog}`;
					prev[`clickedEquals`] = false;
				} else {
					prev[`log`] = currentLog + keyLog;
				}
				return { ...prev };
			});
		}

		if (math.match(/mClear|mPlus|mMinus|mResult/) && clickedEquals) {
			setCalculator((prev) => {
				if (math === "mClear") {
					prev[`memory`] = 0;
				} else if (math === "mPlus") {
					prev[`memory`] = currentMemory + currentResult;
				} else if (math === "mMinus") {
					prev[`memory`] = currentMemory - currentResult;
				} else {
					prev["result"] = currentMemory;
				}
				return { ...prev };
			});
		}
	}

	//handle calculation
	function handleEqualsClick(currentLog) {
		const times = new RegExp(he.decode("&times;"), "g");
		const divide = new RegExp(he.decode("&divide;"), "g");
		const sqrt = new RegExp(he.decode("&radic;"), "g");
		const newLog = currentLog
			.replace(times, "*")
			.replace(divide, "/")
			.replace(/Ans/g, `(${calculator.ans.toString()})`)
			.replace(/E/g, "*10^")
			.replace(/log/g, "log10")
			.replace(/ln/g, "log")
			.replace(sqrt, "sqrt");

		let result = currentLog === "" ? 0 : math.evaluate(newLog);

		// trim result if too long
		let finalResult = math.format(result, { precision: 9 });

		setCalculator((prev) => {
			prev[`ans`] = finalResult;
			prev[`result`] = finalResult;
			prev[`clickedEquals`] = true;
			return { ...prev };
		});
	}

	return (
		<div>
			<div className="calculator">
				<p className="logo">GORDON</p>
				<p className="description">SCIENTIFIC CALCULATOR</p>
				<Display log={calculator.log} result={calculator.result} />
				<Keyboard keyPress={keyPress} />
			</div>
		</div>
	);
}

export default App;
