import React, { Component } from 'react';
// import {connect} from 'react-redux'
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  render() {
    
    const {restaurants} = this.props
    // console.log('restaurants comp', this.props)
    return(
      <ul>
        restaurant list
        {/* add delete */}
        {restaurants.map( restaurant => <Restaurant restaurant={restaurant} 
        deleteRestaurant={this.props.deleteRestaurant}
        key={restaurant.id}
        
        />)}
        

      </ul>
    );
  }
};

// const mapStateToProps = ({restaurants}) => ({ restaurants})

// const mapDispatchToProps = dispatch => ({
//   delete: id => dispatch({type: 'DELETE_RESTAURANT', id}) 
// })
export default (Restaurants);