import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { addRestaurant } from '../actions/manageRestaurantActions'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={ this.props.addRestaurant } />
        <Restaurants 
          restaurants={ this.props.restaurants } 
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps, { addRestaurant })(RestaurantsContainer)
