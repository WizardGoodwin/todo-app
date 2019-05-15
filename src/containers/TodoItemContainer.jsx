import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import TodoItem from '../components/TodoItem/TodoItem';
import TodoForm from '../components/TodoForm/TodoForm';
import Spinner from '../components/Spinner/Spinner';
import {
  getTodoById,
  updateTodo,
  deleteTodo,
} from '../store/actions/todos';

//setting parent node for modal window
Modal.setAppElement('#root');

const TodoItemContainer = ({ todo, isTodoLoaded, getTodoById, updateTodo, deleteTodo, history, match }) => {
  // state for handling modal windows
  const [isModalOpen, setModalOpen] = useState(false);

  // state for handling editing todoItem form
  const [todoForm, setValues] = useState({});

  // fetching todoItem by id from url
  useEffect(() => {
    getTodoById(match.params.id);
    setValues({
      title: todo.title,
      shortDesc: todo.shortDesc,
      fullDesc: todo.fullDesc,
      time: todo.time
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todo.title]);

  // handling change of todoItem editing form
  const onFormChange = (e) => {
    const { id, value } = e.target;
    setValues({
      ...todoForm,
      [id]: value,
    });
  };

  // handling comment form submit
  const onFormSubmit = (e) => {
    e.preventDefault();
    updateTodo(match.params.id, todoForm);
    setModalOpen(false);
  };

  // handling deleting todoItem
  const onDelete = () => {
    deleteTodo(match.params.id);
    history.replace('/');
  };

  if (!isTodoLoaded) {
    return (
      <div className="container d-flex justify-content-center mt-5">
        <Spinner />
      </div>
    );
  } else {
    return (
      <Fragment>
        <TodoItem todo={todo} id={match.params.id} setModalOpen={setModalOpen} onDelete={onDelete} />

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
            isNewItem={false}
            onFormChange={onFormChange}
            setModalOpen={setModalOpen}
            onSubmit={onFormSubmit}
          />
        </Modal>
      </Fragment>
    );
  }
};

const mapStateToProps = ({ todos: { todo, isTodoLoaded } }) => {
  return {
    todo,
    isTodoLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodoById: (id) => dispatch(getTodoById(id)),
    updateTodo: (id, todo) => dispatch(updateTodo(id, todo)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(TodoItemContainer);
