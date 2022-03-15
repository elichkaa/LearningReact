import React, { useState } from "react";
import Accordion from "./Accordion";
import Counter from "./Counter";
import Search from "./Search";
import Translate from "./Translate";
import Dropdown from "./Dropdown";
import Route from "./Route";
import Header from "./Header";

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

const options = [
	{
		label: "The Color Red",
		value: "red",
	},
	{
		label: "The Color Green",
		value: "green",
	},
	{
		label: "The Color Blue",
		value: "blue",
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
			<Route path="/dropdown">
				<button onClick={() => setShowDropdown(!showDropdown)}>
					Toggle dropdown
				</button>
				{showDropdown ? (
					<Dropdown
						selected={selected}
						onSelectedChange={setSelected}
						options={options}
					/>
				) : null}
			</Route>
			<Route path="/search">
				<Search />
			</Route>
			<Route path="/counter">
				<Counter />
			</Route>
		</div>
	);
};

export default App;
