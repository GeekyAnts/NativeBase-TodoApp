import { connect } from 'react-redux';

import Todo from './components/todo';


function mapStateToProps(state) {
    // console.log(state)
  return {
    todos: state.todos,
        // done: state.done
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (payload) => { dispatch(//eslint-disable-line
      {
        type: 'ADD_TODO',
        payload }
                ); },
    setVisibilityFilter: (index) => { dispatch(//eslint-disable-line
      {
        type: 'SET_VISIBILITY_FILTER',
        index,
      }
                ); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
