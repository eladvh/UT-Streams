import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from '../streams/js/StreamCreate';
import StreamDelete from '../streams/js/StreamDelete';
import StreamEdit from '../streams/js/StreamEdit';
import StreamList from '../streams/js/StreamList';
import StreamShow from '../streams/js/StreamShow';
import Header from './Header';
import history from '../../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;