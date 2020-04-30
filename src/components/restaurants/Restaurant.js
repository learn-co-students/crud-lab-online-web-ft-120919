import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'


const Restaurant = props => {
  return (
    <div>
    {/* {console.log('restaurant comp', props)} */}
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

// class Restaurant extends Component {


//   render() {
//     // const { restaurant } = this.props;
//     // console.log(restaurant)
//     return (
//       <div>
//         <li>
//           {props.restaurant.text}
//           <button
//           onClick={() => props.delete(props.restaurant.id)}
//           > X </button>
//           <ReviewsContainer restaurant={props.restaurant}/>
//         </li>
//       </div>
//     );
//   }
// };


