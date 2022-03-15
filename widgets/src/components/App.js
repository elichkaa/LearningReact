import React, { useState } from "react";
import Accordion from "./Accordion";
import Counter from "./Counter";
import Search from "./Search";
import Translate from "./Translate";
import Dropdown from "./Dropdown";

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
	//const [selected, setSelected] = useState(options[0]);
	//const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div>
			<Translate />

			{/* <button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle dropdown
			</button>
			{showDropdown ? (
				<Dropdown
					selected={selected}
					onSelectedChange={setSelected}
					options={options}
				/>
			) : null} */}

			{/* <Search />
			<Accordion items={items} />
			<Counter /> */}
		</div>
	);
};

export default App;
