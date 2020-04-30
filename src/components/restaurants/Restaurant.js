import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'


const Restaurant = props => {
  return (
    <div>
    {console.log('restaurant comp', props)}
        <li>
          {props.restaurant.text}
          <button
          onClick={() => props.deleteRestaurant(props.restaurant.id)}
          > X </button>
          <ReviewsContainer restaurant={props.restaurant}/>
        </li>
      </div>
  )
}

export default Restaurant;