import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReviewsContainer from '../../containers/ReviewsContainer'
import { deleteRestaurant } from '../../actions/manageRestaurantActions'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    const handleOnClick = () => {
      this.props.deleteRestaurant({
        payload: restaurant.id
      })
    }

    return (
      <li key={restaurant.id}>
        <h2>
          <span>{restaurant.text} </span>
          <button onClick={ handleOnClick }> X </button>
        </h2>
        <ReviewsContainer restaurant={restaurant}/>
      </li>
    );
  }
};

export default connect(null, { deleteRestaurant })(Restaurant)
