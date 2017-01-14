import React, { PropTypes } from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import reacteor from './common/reacteor';

function requireAuth({location}, replace) {
  if (!reacteor.loggedIn)
    replace({pathname: '/login'})
}

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} onEnter={requireAuth}/>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Router>
  );
};
