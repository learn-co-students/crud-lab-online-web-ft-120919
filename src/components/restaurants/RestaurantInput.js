import React, { Component } from 'react';

class RestaurantInput extends Component {
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
    this.props.addRestaurant(
      { payload: this.state.text }
    )
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Add Restaurant</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            onChange={this.handleChange}
            name="text"
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
