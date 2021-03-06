import React, {Component} from "react";

let apothegmString = "";

const Apothegmify = (str) => {
	if (str === "") {
		apothegmString = "";
		return "";
	} else {
		for (let i = 0; i < str.length; i++) {
			apothegmString = apothegmString + str.slice(i);
		}
		return apothegmString;
	}
};

class Apothegm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: props.input
		};

		//this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<>
				<div>Apothegm</div>
				<textarea
					rows="10"
					cols="50"
					value={Apothegmify(this.props.input)}
					className="apothegm_textarea passive_textarea"
				>
			</textarea>
			</>
		);
	}
};

export default Apothegm;
