import { connect }         from 'react-redux';

import UserCard            from '../components/UserCard.jsx';
import * as SessionActions from '../actions/SessionActions.js';

function mapStateToProps(state) {
  return {
    isLogged: state.session.isLogged || false,
    userName: state.session.userName || ''
  };
}

export default connect(mapStateToProps, {
  ...SessionActions
})(UserCard);
