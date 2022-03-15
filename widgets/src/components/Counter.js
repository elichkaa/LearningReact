import React, { useState } from "react";

const Counter = () => {
	const [number, setNumber] = useState(0);

	const onButtonClick = () => {
		setNumber(number + 1);
	};

	return (
		<div>
			<div>Number: {number}</div>
			<button onClick={onButtonClick}>Click Me!</button>
		</div>
	);
};

export default Counter;
