import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // console.log(this.props)
    const filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return (
      <ul>
        Reviews
        {filteredReviews.map(review => {
          return (
            <Review key={review.id}
                    review={review}
                    deleteReview={this.props.deleteReview} />
          )
        })}
      </ul>
    );
  }
};

export default Reviews;
