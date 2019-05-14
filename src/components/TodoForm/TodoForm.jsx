import React from 'react';

const TodoForm = ({
  form,
  isNewItem,
  onFormChange,
  setModalOpen,
  onSubmit,
}) => {
  const { title, shortDesc, fullDesc, time } = form;
  return (
    <div className="card">
      <div className="card-header">
        {isNewItem ? 'Добавить задание' : 'Редактировать задание'}
        <button className="close" onClick={() => setModalOpen(false)}>
          <span>&times;</span>
        </button>
      </div>
      <div className="card-body">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="title">Заголовок: </label>
            <input
              type="text"
              className="form-control"
              id="title"
              defaultValue={title}
              onChange={(e) => onFormChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Краткое содержание: </label>
            <textarea
              className="form-control"
              id="shortDesc"
              rows="2"
              defaultValue={shortDesc}
              onChange={(e) => onFormChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Полное содержание: </label>
            <textarea
              className="form-control"
              id="fullDesc"
              rows="3"
              defaultValue={fullDesc}
              onChange={(e) => onFormChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Время выполнения: </label>
            <input
              type="text"
              className="form-control"
              id="time"
              defaultValue={time}
              onChange={(e) => onFormChange(e)}
            />
          </div>

          <button className="btn btn-success" type="submit">
            {isNewItem ? 'Добавить' : 'Сохранить'}
          </button>

          <button
            className="btn btn-secondary float-right"
            onClick={() => setModalOpen(false)}
          >
            Отменить
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
