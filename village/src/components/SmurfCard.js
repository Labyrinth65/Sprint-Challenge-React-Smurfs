import React, { Component } from "react";
import Smurf from "./Smurf";

class SmurfCard extends Component {
	render() {
		return (
			<div className="smurfCard">
				{this.props.smurfs
					.filter(
						smurf => smurf.id === parseInt(this.props.match.params.id, 10)
					)
					.map(smurf => {
						return (
							<Smurf
								{...smurf}
								key={smurf.id}
								deleteSmurf={this.props.deleteSmurf}
								updateSmurf={this.props.updateSmurf}
							/>
						);
					})}
			</div>
		);
	}
}

SmurfCard.defaultProps = {
	smurfs: []
};

export default SmurfCard;
