export const SESSION_LOGIN  = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export function login(userName = 'unknow') {
  return {
    type: SESSION_LOGIN,
    userName
  };
}

export function logout() {
  return {
    type: SESSION_LOGOUT
  };
}
