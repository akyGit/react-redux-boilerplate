import { connect }         from 'react-redux';

import * as SessionActions from '../../../actions/SessionActions';
import MainPage            from './MainPage';

function mapStateToProps(state) {
  return {
    isLogged: state.session.isLogged || false,
    userName: state.session.userName || ''
  };
}

export default connect(mapStateToProps, {
  ...SessionActions
})(MainPage);
