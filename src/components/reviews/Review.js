import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.deleteReviewFromRestaurant({
      payload: {
        ...this.props.review
      }
    })
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          <span>{review.text} </span>
          <button onClick={ this.handleOnClick }> X </button>
        </li>
      </div>
    );
  }

};

export default Review;
