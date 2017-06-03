import React           from 'react';
import ReactDOM        from 'react-dom';

import { createStore } from 'redux';
import { Provider }    from 'react-redux';

import reducers        from './reducers';

const store = createStore(reducers);

import UserCard from './containers/UserCard.js';

class App extends React.Component {
    render() {
        return (
            <div>
              <span>react-redux-boilerplate</span>
              <UserCard />
            </div>
        );
    }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
