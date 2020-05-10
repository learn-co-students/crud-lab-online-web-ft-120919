import React, { Component } from 'react';

class RestaurantInput extends Component {

	state = {
		text: ''
	}

	handleChange = event => {
		this.setState({
			text: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.addRestaurant(this.state.text)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} >
				Restaurant: <input type='text' name='text' value={this.state.text} onChange={this.handleChange} />
				<input type='submit' />
			</form>
		);
	}
};

export default RestaurantInput;
