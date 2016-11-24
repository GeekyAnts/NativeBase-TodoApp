import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo, setVisibilityFilter } from './action';
import Todo from './components/Todo';


function mapStateToProps(state) {
  return {
    todos: state.todos,
    displayType: state.displayType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: payload => dispatch(addTodo(payload)),
    toggleTodo: index => dispatch(toggleTodo(index)),
    removeTodo: index => dispatch(removeTodo(index)),
    setVisibilityFilter: displayType => dispatch(setVisibilityFilter(displayType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
