import React, { Component } from 'react';

const Review = props => {
  return (
    <div>
          {/* {console.log('review comp', props)} */}

        <li>
          {props.review.text}
          <button
          onClick={() => props.delete(props.review.id)}
          > x </button>
          
        </li>
      </div>
  )
}

export default Review;

// class Review extends Component {

//   render() {
//     const { review } = this.props

//     return (
//       <div>
//         <li>
//           {review.text}
//         </li>
//         <button> X </button>
//       </div>
//     );
//   }

// };

// export default Review;
