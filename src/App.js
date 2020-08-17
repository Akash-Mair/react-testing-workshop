import React, { useContext } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';
import Counter from './pages/Counter/Counter';
import UserForm from './pages/Form/Form';
import Todo from './pages/Todo/Todo';
import { UserContext } from './index.js';

function App() {
  const { username } = useContext(UserContext)
  return (
    <div className="App">
      <nav>
        <Link to="/">Counter</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/userform">Form</Link>
        <div>{username}</div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Counter initialCountValue={0} />
        </Route>
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/userform" component={UserForm} />
      </Switch>
    </div>
  );
}

export default App;
