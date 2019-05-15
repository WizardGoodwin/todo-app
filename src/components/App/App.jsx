import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TodoListContainer from '../../containers/TodoListContainer';
import TodoItemContainer from '../../containers/TodoItemContainer';
import Layout from '../Layout/Layot';
import NotFound from '../../components/NotFound/NotFound';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={TodoListContainer} />
        <Route path="/todo-item/:id" component={TodoItemContainer} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
