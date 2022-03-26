import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const onTermSubmit = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});

		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};

	useEffect(() => {
		onTermSubmit("nijisanji");
	}, []);

	return (
		<div className="ui container">
			<SearchBar onFormSubmit={onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo}></VideoDetail>
					</div>
					<div className="five wide column">
						<VideoList
							onVideoSelect={setSelectedVideo}
							videos={videos}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

// class App extends React.Component {
// 	state = { videos: [], selectedVideo: null };

// 	componentDidMount() {
// 		this.onTermSubmit("nijisanji");
// 	}

// 	onTermSubmit = async (term) => {
// 		const response = await youtube.get("/search", {
// 			params: {
// 				q: term,
// 			},
// 		});

// 		this.setState({
// 			videos: response.data.items,
// 			selectedVideo: response.data.items[0],
// 		});
// 	};

// 	onVideoSelect = (video) => {
// 		this.setState({ selectedVideo: video });
// 	};

// 	render() {
// 		return (
// 			<div className="ui container">
// 				<SearchBar onFormSubmit={this.onTermSubmit} />
// 				<div className="ui grid">
// 					<div className="ui row">
// 						<div className="eleven wide column">
// 							<VideoDetail
// 								video={this.state.selectedVideo}
// 							></VideoDetail>
// 						</div>
// 						<div className="five wide column">
// 							<VideoList
// 								onVideoSelect={this.onVideoSelect}
// 								videos={this.state.videos}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default App;
