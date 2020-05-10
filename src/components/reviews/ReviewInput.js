import React, { Component } from 'react';

class ReviewInput extends Component {

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
		this.props.addReview(this.state.text, this.props.restaurantId)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' name='text' value={this.state.text} onChange={this.handleChange} />
				<input type='submit' />
			</form>
		);
	}
};

export default ReviewInput;
