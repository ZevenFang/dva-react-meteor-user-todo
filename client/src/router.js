import React, { PropTypes } from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';

function requireAuth({location}, replace) {
  if (!sessionStorage.userId)
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
