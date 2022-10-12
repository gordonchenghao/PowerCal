import React from "react";
import Key from "./Key";

function Keyboard(props) {
	return (
		<div className="keyboard">
			<div className="upper-keyboard">
				<Key
					name={
						<div>
							&#x1D4B3;<sup>-1</sup>
						</div>
					}
					keyLog="^-1"
					math="inv"
                    keyPress={props.keyPress}
				/>
				<Key name="&radic;" keyLog="&radic;(" math="sqrt" keyPress={props.keyPress}/>
				<Key
					name={
						<div>
							&#x1D4B3;<sup>2</sup>
						</div>
					}
					keyLog="^2"
					math="sqr"
                    keyPress={props.keyPress}
				/>
				<Key name="^" keyLog="^" math="power" keyPress={props.keyPress} />
				<Key name="log" keyLog="log(" math="log" keyPress={props.keyPress} />
				<Key name="ln" keyLog="ln(" math="log" keyPress={props.keyPress} />
				<Key name="(&minus;)" keyLog="-" math="sub" keyPress={props.keyPress} />
				<Key
					name={
						<div>
							&#x1D4B3;<sup>3</sup>
						</div>
					}
					keyLog="^3"
					math="power"
                    keyPress={props.keyPress}
				/>
				
				<Key name="sin" keyLog="sin(" math="trig" keyPress={props.keyPress} />
				<Key name="cos" keyLog="cos(" math="trig" keyPress={props.keyPress} />
				<Key name="tan" keyLog="tan(" math="trig" keyPress={props.keyPress} />
                <Key name="!" keyLog="!" math="log" keyPress={props.keyPress} />
				<Key name="(" keyLog="(" math="prnths" keyPress={props.keyPress} />
				<Key name=")" keyLog=")" math="prnths" keyPress={props.keyPress} />
                <Key name="MRC" keyLog="" math="mClear" keyPress={props.keyPress} />
                <Key name="M+" keyLog="" math="mPlus" keyPress={props.keyPress} />
				<Key name="M-" keyLog="" math="mMinus" keyPress={props.keyPress} />
				<Key name="MR" keyLog="" math="mResult" keyPress={props.keyPress} />
			</div>
			<div className="lower-keyboard">
				<Key name="1" keyLog="1" math="number" keyPress={props.keyPress}/>
				<Key name="2" keyLog="2" math="number" keyPress={props.keyPress} />
				<Key name="3" keyLog="3" math="number" keyPress={props.keyPress} />
				<Key btnClassName="orange-btn" name="DEL" math="delete" keyPress={props.keyPress} />
				<Key btnClassName="orange-btn" name="AC" math="clear" keyPress={props.keyPress} />
				<Key name="4" keyLog="4" math="number" keyPress={props.keyPress} />
				<Key name="5" keyLog="5" math="number" keyPress={props.keyPress} />
				<Key name="6" keyLog="6" math="number" keyPress={props.keyPress} />
				<Key name="&times;" keyLog="&times;" math="multiply" keyPress={props.keyPress} />
				<Key name="&divide;" keyLog="&divide;" math="divide" keyPress={props.keyPress} />
				<Key name="7" keyLog="7" math="number" keyPress={props.keyPress} />
				<Key name="8" keyLog="8" math="number" keyPress={props.keyPress} />
				<Key name="9" keyLog="9" math="number" keyPress={props.keyPress} />
				<Key name="+" keyLog="+" math="sum" keyPress={props.keyPress}/>
				<Key name="&minus;" keyLog="-" math="subtract" keyPress={props.keyPress} />
				<Key name="0" keyLog="0" math="number" keyPress={props.keyPress} />
				<Key name="." keyLog="." math="comma" keyPress={props.keyPress} />
				<Key name="EXP" keyLog="E" math="exponent" keyPress={props.keyPress} />
				<Key name="Ans" keyLog="Ans" math="ans" keyPress={props.keyPress}/>
				<Key name="=" math="equals" keyPress={props.keyPress} />
			</div>
		</div>
	);
}

export default Keyboard;
