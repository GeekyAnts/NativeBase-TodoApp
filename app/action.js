export function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload,
  };
}

export function toggleTodo(index) {
  return {
    type: 'TOGGLE_TODO',
    index,
  };
}

export function removeTodo(index) {
  return {
    type: 'REMOVE_TODO',
    index,
  };
}

export function setVisibilityFilter(displayType) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    displayType,
  };
}
