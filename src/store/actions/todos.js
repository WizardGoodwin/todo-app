import axios from '../../axios';
import * as actionTypes from './actionTypes';

const addTodoRequest = () => {
  return {
    type: actionTypes.ADD_TODO_REQUEST,
  };
};

const addTodoSuccess = (id, todo) => {
  return {
    type: actionTypes.ADD_TODO_SUCCESS,
    id,
    todo,
  };
};

const addTodoFail = (error) => {
  return {
    type: actionTypes.ADD_TODO_FAIL,
    error,
  };
};

const getTodosRequest = () => {
  return {
    type: actionTypes.GET_TODOS_REQUEST,
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: actionTypes.GET_TODOS_SUCCESS,
    todos,
  };
};

const getTodosFail = (error) => {
  return {
    type: actionTypes.GET_TODOS_FAIL,
    error,
  };
};

const getTodoByIdRequest = () => {
  return {
    type: actionTypes.GET_TODO_BY_ID_REQUEST,
  };
};

const getTodoByIdSuccess = (todo) => {
  return {
    type: actionTypes.GET_TODO_BY_ID_SUCCESS,
    todo,
  };
};

const getTodoByIdFail = (error) => {
  return {
    type: actionTypes.GET_TODO_BY_ID_FAIL,
    error,
  };
};

const updateTodoRequest = () => {
  return {
    type: actionTypes.UPDATE_TODO_REQUEST,
  };
};

const updateTodoSuccess = (todo) => {
  return {
    type: actionTypes.UPDATE_TODO_SUCCESS,
    todo,
  };
};

const updateTodoFail = (error) => {
  return {
    type: actionTypes.UPDATE_TODO_FAIL,
    error,
  };
};

const deleteTodoRequest = () => {
  return {
    type: actionTypes.DELETE_TODO_REQUEST,
  };
};

const deleteTodoSuccess = (id) => {
  return {
    type: actionTypes.DELETE_TODO_SUCCESS,
    id,
  };
};

const deleteTodoFail = (error) => {
  return {
    type: actionTypes.DELETE_TODO_FAIL,
    error,
  };
};

export const addTodo = (newTodo) => {
  // time and date of creating post
  const date = new Date().toLocaleString();
  const todo = { ...newTodo, created_at: date };
  return (dispatch) => {
    dispatch(addTodoRequest());
    axios
      .post(`/todos.json`, todo)
      .then((response) => {
        const id = response.data.name;
        dispatch(addTodoSuccess(id, todo));
      })
      .catch((err) => {
        dispatch(addTodoFail(err.response.data.error));
      });
  };
};

export const getTodos = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(`/todos.json`)
      .then((response) => {
        //convert response object to array of arrays kind of [ id : todoItem ]
        const todos = Object.entries(response.data);
        dispatch(getTodosSuccess(todos));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(getTodosFail(err.response.data.error));
      });
  };
};

export const getTodoById = (id) => {
  return (dispatch) => {
    dispatch(getTodoByIdRequest());
    axios
      .get(`/todos/${id}.json`)
      .then((response) => {
        dispatch(getTodoByIdSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getTodoByIdFail(err.response.data.error));
      });
  };
};

export const updateTodo = (id, editedTodo) => {
  // time and date of updating post
  const date = new Date().toLocaleString();
  const todo = { ...editedTodo, created_at: date };
  return (dispatch) => {
    dispatch(updateTodoRequest());
    axios
      .put(`/todos/${id}.json`, todo)
      .then((response) => {
        console.log(response);
        dispatch(updateTodoSuccess(response.data));
      })
      .catch((err) => {
        dispatch(updateTodoFail(err.response.data.error));
      });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(deleteTodoRequest());
    axios
      .delete(`/todos/${id}.json`)
      .then(() => {
        dispatch(deleteTodoSuccess(id));
      })
      .catch((err) => {
        dispatch(deleteTodoFail(err.response.data.error));
      });
  };
};
