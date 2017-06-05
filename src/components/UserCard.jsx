import React     from 'react';
import PropTypes from 'prop-types';

import './UserCard.less';

export default class UserCard extends React.Component {
  static propTypes = {
    userName: PropTypes.string,
    isLogged: PropTypes.bool,
    login   : PropTypes.func,
    logout  : PropTypes.func
  }

  handleLogin = () => {
    this.props.login(this.userName.value);
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    const { userName, isLogged } = this.props;

    return (
      <div>
        <div>
          { isLogged
            ? <span>Hello Mr. {userName}</span>
            : <span>Please sign in</span> }
        </div>
        { !isLogged ? <input ref={(userName) => this.userName = userName}></input> : null}
        { !isLogged ? <button onClick={this.handleLogin}>Login</button> : <button onClick={this.handleLogout}>Logout</button> }
      </div>
    );
  }
}
