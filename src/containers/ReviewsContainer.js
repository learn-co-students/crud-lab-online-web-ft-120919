import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import {addReview, deleteReview} from '../actions/reviews.js'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview}
                     restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews}
                 restaurant={this.props.restaurant}
                 deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  //debugger
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (review) => dispatch(addReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
