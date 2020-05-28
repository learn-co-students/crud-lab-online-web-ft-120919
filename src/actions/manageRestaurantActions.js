export const addRestaurant = payload => {
  return {
    type: 'ADD_RESTAURANT',
    ...payload
  }
} 

export const deleteRestaurant = payload => {
  return {
    type: 'DELETE_RESTAURANT',
    ...payload
  }
}

export const addReviewToRestaurant = payload => {
  return {
    type: 'ADD_REVIEW',
    ...payload
  }
}

export const deleteReviewFromRestaurant = payload => {
  return {
    type: 'DELETE_REVIEW',
    ...payload
  }
}
