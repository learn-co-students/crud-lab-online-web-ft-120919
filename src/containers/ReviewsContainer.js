import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurant.id} />
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => {
	return {
		addReview: (text, restaurantId) => dispatch({type: 'ADD_REVIEW', review: {text, restaurantId}}),
		deleteReview: (reviewId) => dispatch({type: 'DELETE_REVIEW', reviewId})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
