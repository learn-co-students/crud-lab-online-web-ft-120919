import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text"
                 name="text"
                 onChange={this.handleOnChange}
                 value={this.state.text}>
          </input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
