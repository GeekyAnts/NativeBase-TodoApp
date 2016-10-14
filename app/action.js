export function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload
  }
}

export function setVisibilityFilter(index) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    index
  }
}
