import React, {Component} from "react";


const pyramidify = (str) => {
	let pyramidString = "";
	if (str === "") {
		pyramidString = "";
		return "";
	} else {
		for (let i = 0; i < str.length; i++) {
			pyramidString = pyramidString + str.slice(i) + "\n";
		}
		return pyramidString;
	}
};

class InvertedPyramid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: props.input
		};

		//this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if (nextProps.input !== this.state.input) {
			this.setState({input: nextProps.input});
		}
	}

	render() {
		return (
			<>
				<div>Inverted Pyramid</div>
				<textarea
					rows="10"
					cols="50"
					value={pyramidify(this.state.input)}
					className="pyramid_textarea passive_textarea"
				>
			</textarea>
			</>
		);
	}
};

export default InvertedPyramid;