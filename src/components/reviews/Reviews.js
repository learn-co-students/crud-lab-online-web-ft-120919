import React, { Component } from 'react';
import Review from './Review';
// import {connect} from 'react-redux'

class Reviews extends Component {

  
  render() {
    let reviewList = []

    const {reviews} = this.props
        console.log('reviews comp', reviews)

    if (reviews && reviews.map) {
      let associatedReviews = reviews.filter( review => review.restaurantId === this.props.restaurant.id)
      reviewList = associatedReviews.map( review => <Review review={review} 
        deleteReview={this.props.deleteReview}
        key={review.id}
        {...review}
        />)
      }  

    // filter(review => review.id!==action.id)
    //
    // if (reviews && reviews.map ) {
    //   reviews.map( review => {
    //     console.log('review', review)
    //     reviewList.push(review)
    //   }
    //   )
    // }
    console.log('review2', reviewList)
    // if (review.restaurantId === this.props.restaurant.id) {
      // filter(review => review.id!==action.id)
    // reviewList.filter( review => { 
      

    //     <Review review={review} 
    //     deleteReview={this.props.deleteReview}
    //     key={review.id}
    //     {...review}
    //     />
    //   }
    //   )
    // }
      // if (reviews && reviews.map ) {
      //   reviewList = reviews.map( review => {
      //     console.log('reviews comp', this.props.restaurant.id, review.restaurantId)
      //     if ( review.restaurantId === this.props.restaurant.id) {

            
      //       <Review review={review} 
      //       deleteReview={this.props.deleteReview}
      //       key={review.id}
      //       {...review}
            
      //       />
      //       console.log('reviews comp', reviewList)
      //     }
      //     }
      //   )
      // }
      return (
        <ul>
       {reviewList}
      </ul>
    );
  }
};

export default Reviews;
