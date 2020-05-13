
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return {
        ...state,
        restaurants: [
          ...state.restaurants, {text: action.payload, id: cuidFn()}
        ]
      }

    case 'ADD_REVIEW':
      return {
        ...state,
        reviews: [...state.reviews, {restaurantId: action.review.restaurantId, text: action.review.text, id: cuidFn()}]
      }

    case 'DELETE_RESTAURANT':
      return {
        ...state,
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload)
      }

    case 'DELETE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id !== action.payload)
      }

    default:
      return state
  }
}
