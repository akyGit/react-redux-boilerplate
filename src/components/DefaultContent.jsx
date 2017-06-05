import React     from 'react';
import PropTypes from 'prop-types';

import './DefaultContent.less';

export default class DefaultContent extends React.Component {
  static propTypes = {
    userName: PropTypes.string,
    isLogged: PropTypes.bool,
    onLogin : PropTypes.func,
    onLogout: PropTypes.func
  }

  handleLogin = () => {
    this.props.onLogin(this.userName.value);
  }

  handleLogout = () => {
    this.props.onLogout();
  }

  render() {
    const { userName, isLogged } = this.props;

    return (
      <div className='DefaultContent'>
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
