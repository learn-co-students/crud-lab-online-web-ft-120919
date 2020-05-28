import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const reviews = this.props.restaurant.reviews.map((review) => {
      return <Review 
        key={review.id} 
        review={review} 
        deleteReviewFromRestaurant={this.props.deleteReviewFromRestaurant}
      />
    })

    return (
      <div>
      <h3>Reviews</h3>
        <ul>
          { reviews }
        </ul>
      </div>
    );
  }
};

export default Reviews;