import React from 'react';
import { Link } from 'react-router-dom';

const TodoList = ({ todos }) => {
  if (!todos.length) {
    return (
      <h6 className="my-4 mr-4">
        Пока нет ни одного задания. Нажмите кнопку "Добавить задание"
      </h6>
    )
  } else {
    return todos.map((item) => {
      // destructuring todoList items
      const [id, todo] = item;
      const { title, shortDesc, created_at, time } = todo;
      return (
        <div key={id} className="card shadow my-4 col-xs-12 col-md-4 col-lg-3 mr-5 px-0">
          <div className="card-body">
            <h3 className="card-title">
              <Link to={'/todo-item/' + id} className="card-link">
                {title}
              </Link>
            </h3>
            <small className="card-subtitle text-muted">
              Время на выполнение: {time}
            </small>
            <p className="card-text mt-2">{shortDesc}</p>
          </div>
          <div className="card-footer text-muted">
            <small className="text-muted">Время создания: {created_at}</small>
          </div>
        </div>
      );
    });
  }
};

export default TodoList;
