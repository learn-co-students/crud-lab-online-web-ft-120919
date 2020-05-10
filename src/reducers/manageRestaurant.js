
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
	let idx
	let newItem
	switch (action.type) {
		case 'ADD_RESTAURANT':
			newItem = {
				id: cuid(),
				text: action.text
			}
			return {...state, restaurants: [...state.restaurants, newItem]}
		case 'DELETE_RESTAURANT':
			return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
		case 'ADD_REVIEW':
			newItem = {
				text: action.review.text,
				id: cuid(),
				restaurantId: action.review.restaurantId
			}
			return {...state, reviews: [...state.reviews, newItem]}
		case 'DELETE_REVIEW':
			idx = state.reviews.findIndex(review => review.id === action.reviewId)
			return {...state, reviews: state.reviews.filter(review => review.id !== action.reviewId)}
		default:
			return state
	}
}
