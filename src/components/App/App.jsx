import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ToDoListContainer from '../../containers/TodoListContainer';
import ToDoItemContainer from '../../containers/TodoItemContainer';
import NotFound from '../../shared/NotFound/NotFound';
import Layout from '../Layout/Layot';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={ToDoListContainer} />
        {/*<Route path="/todo-item/:id" component={ToDoItemContainer} />*/}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
