import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { addReviewToRestaurant, deleteReviewFromRestaurant } from '../actions/manageRestaurantActions'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput 
          restaurant={this.props.restaurant}
          addReviewToRestaurant={this.props.addReviewToRestaurant}
        />
        <Reviews 
          restaurant={this.props.restaurant}
          deleteReviewFromRestaurant={this.props.deleteReviewFromRestaurant}
        />
      </div>
    )
  }
}

export default connect(null, { addReviewToRestaurant, deleteReviewFromRestaurant })(ReviewsContainer)
