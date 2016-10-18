export function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload,
  };
}

export function setVisibilityFilter(index) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    index,
  };
}

export function removeTodo(index) {
  return {
    type: 'REMOVE_TODO',
    index,
  };
}
