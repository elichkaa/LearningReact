import React from "react";
import Accordion from "./Accordion";

const items = [
	{
		title: "What is React?",
		content: "Frontend js framework",
	},
	{
		title: "uwuki",
		content: "fufu chan",
	},
	{
		title: "luca",
		content: "tree sentinel tryhard",
	},
];

const App = () => {
	return (
		<div>
			<Accordion items={items} />
		</div>
	);
};

export default App;
