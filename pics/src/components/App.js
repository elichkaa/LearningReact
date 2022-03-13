import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
// import Validator from "./Validator";
class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await unsplash.get("/search/photos", {
			params: { query: term },
		});
		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found : {this.state.images.length} images
				{/* <Validator /> */}
			</div>
		);
	}
}

export default App;
