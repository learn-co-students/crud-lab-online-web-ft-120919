
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
    restaurants: [],
    reviews: []
}, action) {
    
    switch (action.type) {
        case 'ADD_RESTAURANT':
            // console.log('add restaurant', action)
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            return { ...state, restaurants: state.restaurants.concat(restaurant)}
        case 'DELETE_RESTAURANT':
            return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id!==action.id)}
        case 'ADD_REVIEW':
            console.log('add review', action)
            const review = {
                id: cuid(),
                text: action.payload.text,
                restaurantId: action.payload.restaurantId
            }
            // console.log( 'add review 2', { ...state, reviews: state.reviews.concat(review)})
            return { ...state, reviews: state.reviews.concat(review)}
        case 'DELETE_REVIEW':
            // debugger
            return { ...state, reviews: state.reviews.filter(review => review.id!==action.payload)}
        default:
            return state
    }
}
