import React, { Component } from 'react';
import Reviews from './Reviews';
import { connect } from 'react-redux'

// call connect need to get restaurantid into redux when adding restaurant???

class ReviewInput extends Component {

  state = {
    text: "",
    restaurantId: 0
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.addReview(this.state);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={(event)=>{this.handleOnSubmit(event)}}>

        <input 
        type="text"
        value={this.state.text}
        onChange={(event)=>{this.handleOnChange(event)}}
        />
        <input type="submit" />
        </form>
      </div>
    );
  }
};




export default (ReviewInput);


// export default ReviewInput;
// export default connect(mapStateToProps)(ReviewInput);