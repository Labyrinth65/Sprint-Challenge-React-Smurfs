import React, { Component } from "react";
import PropTypes from "prop-types";

export class RenderSmurf extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardName: this.props.name,
			cardAge: this.props.age,
			cardHeight: this.props.height
		};
	}

	handleUpdate = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	formSubmit = e => {
		const updatedSmurf = {
			name: this.state.cardName,
			age: this.state.cardAge,
			height: this.state.cardHeight
		};
		this.props.updateSmurf(e, this.props.id, updatedSmurf);
		this.props.updateState();
	};

	render() {
		if (this.props.updating === false) {
			return (
				<div>
					<div className="cardElement">{this.props.name}</div>
					<div className="cardElement">{this.props.age}</div>
					<div className="cardElement">{this.props.height}</div>
				</div>
			);
		} else
			return (
				<form onSubmit={this.formSubmit} className="updateForm">
					<div>
						<input
							onChange={this.handleUpdate}
							name="cardName"
							placeholder="Enter Name"
							value={this.state.cardName}
							type="text"
							className="inputElement"
							required
						/>
						<input
							onChange={this.handleUpdate}
							name="cardAge"
							placeholder="Enter Age"
							value={this.state.cardAge}
							type="number"
							className="inputElement"
							required
						/>
						<input
							onChange={this.handleUpdate}
							name="cardHeight"
							placeholder="Enter Height"
							value={this.state.cardHeight}
							type="string"
							className="inputElement"
							required
						/>
					</div>
					<button>Submit Update</button>
				</form>
			);
	}
}

RenderSmurf.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	height: PropTypes.string.isRequired
};

export default RenderSmurf;
