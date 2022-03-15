import React from "react";
import Accordion from "./Accordion";
import Counter from "./Counter";
import Search from "./Search";

const query =
	"http://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming";

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
			<Search />
			{/* <Accordion items={items} />
			<Counter /> */}
		</div>
	);
};

export default App;
