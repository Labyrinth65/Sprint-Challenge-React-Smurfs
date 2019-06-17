import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink, withRouter } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import SmurfCard from "./components/SmurfCard";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: []
		};
	}
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	componentDidMount() {
		axios
			.get(`http://localhost:3333/smurfs`)
			.then(res => {
				console.log(res);
				this.setState({ smurfs: res.data });
			})
			.catch(err => {
				this.setState({ error: err.message });
			});
	}

	addSmurf = (event, newSmurf) => {
		event.preventDefault();
		// add code to create the smurf using the api
		axios
			.post(`http://localhost:3333/smurfs`, newSmurf)
			.then(res => {
				this.setState({ smurfs: res.data });
			})
			.catch(err => {
				this.setState({ error: err.message });
			});
	};

	deleteSmurf = (e, id) => {
		// this.setState(prevState => ({
		// 	smurfs: prevState.smurfs.filter(smurf => smurf.id !== id)
		// }));
		e.preventDefault();
		axios
			.delete(`http://localhost:3333/smurfs/${id}`)
			.then(res => {
				this.setState({ smurfs: res.data });
			})
			.catch(err => {
				console.log(err);
				this.setState({ error: err.message });
			});
	};

	updateSmurf = (e, id, updatedSmurf) => {
		// this.setState(prevState => ({
		// 	smurfs: prevState.smurfs.filter(smurf => smurf.id !== id)
		// }));
		e.preventDefault();
		axios
			.put(`http://localhost:3333/smurfs/${id}`, updatedSmurf)
			.then(res => {
				this.setState({ smurfs: res.data });
			})
			.catch(err => {
				console.log(err);
				this.setState({ error: err.message });
			});
	};

	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.
	render() {
		return (
			<div className="App">
				<div className="navBar">
					<NavLink exact to="/" className="navLink">
						Smurf List
					</NavLink>
					<NavLink exact to="/smurf-form" className="navLink">
						Add Smurf
					</NavLink>
				</div>
				<Route
					path="/smurf-form"
					render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
				/>
				<Route
					exact
					path="/"
					render={props => (
						<Smurfs
							{...props}
							smurfs={this.state.smurfs}
							deleteSmurf={this.deleteSmurf}
							updateSmurf={this.updateSmurf}
						/>
					)}
				/>
				<Route
					exact
					path="/smurf/:id"
					render={props => (
						<SmurfCard
							{...props}
							smurfs={this.state.smurfs}
							deleteSmurf={this.deleteSmurf}
							updateSmurf={this.updateSmurf}
						/>
					)}
				/>
			</div>
		);
	}
}

export default withRouter(App);
