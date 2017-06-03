import {
  SESSION_LOGIN,
  SESSION_LOGOUT
} from '../actions/SessionActions.js';

export default function session(state = {}, action) {
  switch(action.type) {
    case SESSION_LOGIN:
      return { ...state, isLogged: true, userName: action.userName };
    case SESSION_LOGOUT:
      return { ...state, isLogged: false, userName: '' };
    default:
      return state;
  }
}
