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
      <div className='UserCard'>
        <h1>react-redux-boilerplate</h1>
        <div className='invite'>
          { isLogged
            ? <span>Hello Mr. { userName || 'Unknown' }</span>
            : <span>Please sign in</span> }
        </div>
        { !isLogged 
          ? <input className='textInput' ref={(userName) => this.userName = userName}></input> 
          : null}
        { !isLogged 
          ? <button className='button' onClick={this.handleLogin}>Login</button> 
          : <button className='button' onClick={this.handleLogout}>Logout</button> }
      </div>
    );
  }
}
