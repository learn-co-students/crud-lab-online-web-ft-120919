import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addReviewToRestaurant({
      payload: {
        restaurantId: this.props.restaurant.id,
        text: this.state.text
      }
    })

    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        <p>Write Review:</p>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
