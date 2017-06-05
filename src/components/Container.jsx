import React     from 'react';
import PropTypes from 'prop-types';

import DefaultContent from './DefaultContent.jsx';

import './Container.less';

export default class Container extends React.Component {
  static propTypes = {
    userName: PropTypes.string,
    isLogged: PropTypes.bool,
    login   : PropTypes.func,
    logout  : PropTypes.func
  }

  handleLogin = (userName) => {
    this.props.login(userName);
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    const { userName, isLogged } = this.props;

    return (
      <div className='Container'>
        <div className='Content'>
          <DefaultContent
            userName = {this.props.userName}
            isLogged = {this.props.isLogged}
            onLogin  = {this.handleLogin}
            onLogout = {this.handleLogout}
          />
        </div>
      </div>
    );
  }
}
