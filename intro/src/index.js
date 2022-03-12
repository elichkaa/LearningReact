import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<Comment
					author="Sam"
					timeAgo="Today 1AM"
					text="Nice blog!"
					avatar={Faker.image.image()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<Comment
					author="Jack"
					timeAgo="Today 5PM"
					text="I'm speechless!"
					avatar={Faker.image.image()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<Comment
					author="Jane"
					timeAgo="Yesterday 1AM"
					text="Wow I'm impressed!"
					avatar={Faker.image.image()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
