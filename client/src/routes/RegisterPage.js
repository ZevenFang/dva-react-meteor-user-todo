import React, {Component} from 'react';
import {Link, hashHistory} from 'dva/router';
import reacteor from '../common/reacteor';

class LoginPage extends Component {

  constructor(props) {
    super(props);
  }

  signUp = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let rePassword = this.refs.rePassword.value;
    if (username.trim().length===0){
      alert('Require username.');
    }
    else if (password.trim().length===0) {
      alert('Require password.');
    }
    else if (password !== rePassword) {
      alert('Confirm password invalid.');
    }
    else {
      reacteor.call('createAccount', username, password)
        .then(function (res) {
          alert('Registration success');
          hashHistory.push('/login')
        })
        .catch(function ({reason}) {
          alert(reason);
        })

    }
  };

  render() {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>sign-up</h1>
            <input
              ref="username"
              className="new-todo"
              placeholder="username"/>
            <input
              ref="password"
              type="password"
              className="new-todo"
              placeholder="password"/>
            <input
              ref="rePassword"
              type="password"
              className="new-todo"
              placeholder="confirm password"/>
          </header>
          <footer className="footer">
            <ul className="filters">
              <li onClick={this.signUp}>
                <a style={{cursor:'pointer'}}>Submit</a>
              </li>
            </ul>
            <button className="clear-completed">
              <Link to="/login">sign in</Link>
            </button>
          </footer>
        </section>
      </div>
    );
  }

}

export default LoginPage;
