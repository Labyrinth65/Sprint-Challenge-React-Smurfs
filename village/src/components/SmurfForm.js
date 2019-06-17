import React, { Component } from "react";

class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age: "",
			height: ""
		};
	}

	addSmurf = event => {
		event.preventDefault();
		// add code to create the smurf using the api
		const newSmurf = {
			name: this.state.name,
			age: parseInt(this.state.age, 10),
			height: this.state.height
		};
		this.props.addSmurf(event, newSmurf);
		this.setState({
			name: "",
			age: "",
			height: ""
		});
		this.props.history.push("/");
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.addSmurf} className="smurfForm">
					<label htmlFor="name">Name</label>
					<input
						onChange={this.handleInputChange}
						placeholder="Enter Name"
						value={this.state.name}
						name="name"
						className="addElement"
						required
					/>
					<label htmlFor="age">Age</label>
					<input
						onChange={this.handleInputChange}
						placeholder="Enter Age"
						value={this.state.age}
						name="age"
						type="number"
						className="addElement"
						required
					/>
					<label htmlFor="height">Height</label>
					<input
						onChange={this.handleInputChange}
						placeholder="Enter Height"
						value={this.state.height}
						name="height"
						className="addElement"
						required
					/>
					<button type="submit">Add to the village</button>
				</form>
			</div>
		);
	}
}

export default SmurfForm;
