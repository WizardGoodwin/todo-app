import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm/TodoForm';
import Spinner from '../components/Spinner/Spinner';
import { addTodo, getTodos } from '../store/actions/todos';

//setting parent node for modal window
Modal.setAppElement('#root');

const TodoListContainer = ({ todos, isTodosLoaded, addTodo, getTodos }) => {
  // state for handling modal windows
  const [isModalOpen, setModalOpen] = useState(false);

  const emptyForm = {
    title: '',
    shortDesc: '',
    fullDesc: '',
    time: ''
  };

  // state for handling adding todoItem form
  const [todoForm, setValues] = useState(emptyForm);

  // fetching all todos from backend on page load
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handling change of todoItem form inputs
  const onFormChange = (e) => {
    const { id, value } = e.target;
    setValues({
      ...todoForm,
      [id]: value,
    });
  };

  // handling post form submit
  const onFormSubmit = (e) => {
    e.preventDefault();
    //send request to backend
    addTodo(todoForm);
    setModalOpen(false);
    //clear form fields
    setValues(emptyForm);
  };

  if (!isTodosLoaded) {
    return (
      <div className="container d-flex justify-content-center mt-5">
        <Spinner />
      </div>
    );
  } else {
    return (
      <Fragment>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setModalOpen(false)}
          className="modal-todo"
          overlayClassName="overlay"
          shouldCloseOnOverlayClick={true}
          closeTimeoutMS={300}
        >
          <TodoForm
            form={todoForm}
            isNewItem={true}
            onFormChange={onFormChange}
            setModalOpen={setModalOpen}
            onSubmit={onFormSubmit}
          />
        </Modal>

        <TodoList todos={todos} />

        <div className="my-4 col-xs-12 col-md-4 col-lg-3">
          <button className="btn btn-info" onClick={() =>setModalOpen(true)}>
            Добавить задание
          </button>
        </div>

      </Fragment>
    );
  }
};

const mapStateToProps = ({ todos: { todos, isTodosLoaded } }) => {
  return {
    todos,
    isTodosLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos()),
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListContainer);
