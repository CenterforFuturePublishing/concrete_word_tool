import React, {Component} from "react";
import Reverse from "./Reverse";

//import PropTypes from 'prop-types';

class WordSmasher extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ""
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			input: event.target.value
		});
	}

	render() {
		return (
			<div>
				<br/>
				<textarea rows="10" cols="50"
                          value={this.state.input}
                          onChange={this.handleChange}
                          className="input_textarea"
				/>
				<br/>
				<Reverse input={this.state.input}/>
			</div>
		);
	}
}

//WordSmasher.propTypes = {};

export default WordSmasher;