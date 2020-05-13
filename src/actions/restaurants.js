export const addRestaurant = (name) => {
  return {type: 'ADD_RESTAURANT', payload: name}
}

export const deleteRestaurant = (id) => {
  return {type: 'DELETE_RESTAURANT', payload: id}
}
