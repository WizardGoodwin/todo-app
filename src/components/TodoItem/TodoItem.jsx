import React from 'react';
import { Link } from 'react-router-dom';


const TodoItem = ({ todo, id, setModalOpen, onDelete }) => {
  const { title, shortDesc, fullDesc, created_at, time } = todo;
  return (
    <div className="card shadow my-4">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text"><b>ID задания: </b>{id}</p>
        <p className="card-text"><b>Краткое описание: </b> {shortDesc}</p>
        <p className="card-text"><b>Полное описание: </b> {fullDesc}</p>
        <p className="card-text"><b>Время на выполнение: </b> {time}</p>
        <p className="card-text">
          <small className="text-muted">Дата создания: {created_at}</small>
        </p>
      </div>
      <div className="card-footer">
        <Link to={'/'} className="card-link">
          Назад к списку заданий
        </Link>
        <button
          className="btn btn-outline-danger float-right ml-4"
          onClick={() => onDelete()}
        >
          Удалить
        </button>
        <button
          className="btn btn-outline-info float-right"
          onClick={() => setModalOpen(true)}
        >
          Редактировать
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
