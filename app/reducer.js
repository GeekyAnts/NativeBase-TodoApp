const initialState = {
  todos:
  [
      //  {text: '', completed: false }
  ],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
            // console.log(...state.todos);
      return { ...state,
        todos:
              [...state.todos, { text: action.payload, completed: false }] };
            // console.log(...state.todos);
    case 'SET_VISIBILITY_FILTER':
            // console.log(action.index)
            // console.log(state.todos[0].completed);
      var todoObject = state.todos[action.index];//eslint-disable-line
      todoObject.completed = !todoObject.completed;
            // console.log(state.todos)
      return { ...state, todos: [...state.todos] };
            // return { ...state, todos : [ ...state.todos,
            // {text: action.payload, completed: !state.todos.completed}]};
    default:
  }
  return state;
}
