import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  

  render() {

// console.log('reviews cont', this.props)
    return (

      <div>
        <ReviewInput addReview={this.props.addReview}
        restaurant={this.props.restaurant}/>
        <Reviews restaurant={this.props.restaurant}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: (review) => dispatch({ type: 'ADD_REVIEW', payload: review })
})

const mapStateToProps = ({reviews}) => ({ reviews})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
