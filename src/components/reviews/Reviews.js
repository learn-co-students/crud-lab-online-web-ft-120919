import React, { Component } from 'react';
import Review from './Review';
import {connect} from 'react-redux'

class Reviews extends Component {

  
  render() {
    let reviewList = []

    const {reviews} = this.props
        console.log('reviews comp', this.props.restaurant.id)

    if (reviews && reviews.map) {
      reviewList = reviews.map( review => <Review review={review} 
        delete={this.props.delete}
        key={review.id}
        {...review}
        />)
      }
      return (
        <ul>
       {reviewList}
      </ul>
    );
  }
};

export default Reviews;
