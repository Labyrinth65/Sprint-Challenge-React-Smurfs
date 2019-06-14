import React from "react";
import RenderSmurf from "./RenderSmurf";
import { Link } from "react-router-dom";

class Smurf extends React.Component {
	constructor() {
		super();
		this.state = {
			updating: false
		};
	}

	updateState = e => {
		if (this.state.updating === false) {
			this.setState({
				updating: true
			});
		} else {
			this.setState({
				updating: false
			});
		}
	};

	render() {
		return (
			<div className="Smurf">
				<div className="cardTop">
					<Link to={`/smurf/${this.props.id}`} className="viewDiv">
						View Smurf
					</Link>
					<div className="buttonDiv">
						<div onClick={this.updateState} className="updateButton">
							<i className="far fa-edit" />
						</div>
						<div
							onClick={e => this.props.deleteSmurf(e, this.props.id)}
							className="deleteButton"
						>
							<i className="far fa-trash-alt" />
						</div>
					</div>
				</div>
				{/* <div className="cardElement">{this.props.name}</div>
				<div className="cardElement">{this.props.height} tall</div>
				<div className="cardElement">{this.props.age} smurf years old</div> */}
				<RenderSmurf
					{...this.props}
					{...this.state}
					updateSmurf={this.props.updateSmurf}
					updateState={this.updateState}
				/>
			</div>
		);
	}
}

Smurf.defaultProps = {
	name: "",
	height: "",
	age: ""
};

export default Smurf;
