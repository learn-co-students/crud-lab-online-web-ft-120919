
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  // console.log(action)

  switch(action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = {
        id: cuid(),
        text: action.payload,
        reviews: []
      }
      return {
        ...state,
        restaurants: [ ...state.restaurants, newRestaurant ]
      }
    
    case 'DELETE_RESTAURANT':
      return {
        ...state,
        restaurants: state.restaurants.filter((r) => r.id !== action.payload )
      }

    case 'ADD_REVIEW':
      const newReview = {
        id: cuid(),
        restaurantId: action.payload.restaurantId,
        text: action.payload.text
      }
      return {
        ...state,
        restaurants: state.restaurants.map((restaurant) => {
          if (restaurant.id === action.payload.restaurantId) {
            return {
              ...restaurant,
              reviews: [...restaurant.reviews, newReview]
            }
          } else {
            return restaurant
          }
        })
      }
    
    case 'DELETE_REVIEW':
      return {
        ...state,
        restaurants: state.restaurants.map((restaurant) => {
          if (restaurant.id === action.payload.restaurantId) {
            return {
              ...restaurant,
              reviews: restaurant.reviews.filter((review) => review.id !== action.payload.id)
            }
          } else {
            return restaurant
          }
        })
      }

    default:
      return state
  }
}
