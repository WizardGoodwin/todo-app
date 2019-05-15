import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todos: [],
  todo: {},
  error: null,
  isTodoLoaded: false,
  isTodosLoaded: false,
};

const addTodoRequest = (state) => {
  return {
    ...state,
    error: null,
  };
};

const addTodoSuccess = (state, action) => {
  const newTodo = [action.id, action.todo];
  return {
    ...state,
    error: null,
    todos: state.todos.concat([newTodo]),
  };
};

const addTodoFail = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const getTodosRequest = (state) => {
  return {
    ...state,
    error: null,
    isTodosLoaded: false,
  };
};

const getTodosSuccess = (state, action) => {
  return {
    ...state,
    todos: action.todos,
    error: null,
    isTodosLoaded: true,
  };
};

const getTodosFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    isTodosLoaded: true,
  };
};

const getTodoByIdRequest = (state) => {
  return {
    ...state,
    error: null,
    isTodoLoaded: false,
  };
};

const getTodoByIdSuccess = (state, action) => {
  return {
    ...state,
    todo: action.todo,
    error: null,
    isTodoLoaded: true,
  };
};

const getTodoByIdFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    isTodoLoaded: true,
  };
};

const updateTodoRequest = (state) => {
  return {
    ...state,
    error: null,
  };
};

const updateTodoSuccess = (state, action) => {  
  return {
    ...state,    
    error: null,
    todo: action.todo
  };
};

const updateTodoFail = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const deleteTodoRequest = (state) => {
  return {
    ...state,
    error: null,
  };
};

const deleteTodoSuccess = (state, action) => {
  // deleting from array todoItem with id
  const newTodos = state.todos.filter((todo) => todo[0] !== action.id);
  return {
    ...state,
    todos: newTodos,
    error: null,
  };
};

const deleteTodoFail = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO_REQUEST:
      return addTodoRequest(state, action);
    case actionTypes.ADD_TODO_SUCCESS:
      return addTodoSuccess(state, action);
    case actionTypes.ADD_TODO_FAIL:
      return addTodoFail(state, action);
    case actionTypes.GET_TODOS_REQUEST:
      return getTodosRequest(state, action);
    case actionTypes.GET_TODOS_SUCCESS:
      return getTodosSuccess(state, action);
    case actionTypes.GET_TODOS_FAIL:
      return getTodosFail(state, action);
    case actionTypes.GET_TODO_BY_ID_REQUEST:
      return getTodoByIdRequest(state, action);
    case actionTypes.GET_TODO_BY_ID_SUCCESS:
      return getTodoByIdSuccess(state, action);
    case actionTypes.GET_TODO_BY_ID_FAIL:
      return getTodoByIdFail(state, action);
    case actionTypes.UPDATE_TODO_REQUEST:
      return updateTodoRequest(state, action);
    case actionTypes.UPDATE_TODO_SUCCESS:
      return updateTodoSuccess(state, action);
    case actionTypes.UPDATE_TODO_FAIL:
      return updateTodoFail(state, action);
    case actionTypes.DELETE_TODO_REQUEST:
      return deleteTodoRequest(state, action);
    case actionTypes.DELETE_TODO_SUCCESS:
      return deleteTodoSuccess(state, action);
    case actionTypes.DELETE_TODO_FAIL:
      return deleteTodoFail(state, action);
    default:
      return state;
  }
};

export default todosReducer;
