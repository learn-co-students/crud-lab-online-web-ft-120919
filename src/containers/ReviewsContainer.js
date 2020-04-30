import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
// import Review from '../components/reviews/Review'

class ReviewsContainer extends Component {

  

  render() {

// console.log('reviews cont', this.props.restaurant)
    return (
//what's happening in here
      <div>
        <ReviewInput addReview={this.props.addReview}
        restaurant={this.props.restaurant}/>
        <Reviews restaurant={this.props.restaurant} reviews={this.props.reviews} deleteReview={this.props.deleteReview} />
        {/* <Reviews restaurant={this.props.restaurant}/> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: (review) => dispatch({ type: 'ADD_REVIEW', payload: review }),
  deleteReview: (id) => dispatch({ type: 'DELETE_REVIEW', payload: id })
})

//find out what is being passed here, what do objects look like?
const mapStateToProps = ( {reviews} ) => (  {reviews})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
