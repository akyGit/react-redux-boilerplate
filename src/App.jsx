import React           from 'react';
import ReactDOM        from 'react-dom';

import { createStore } from 'redux';
import { Provider }    from 'react-redux';

import reducers        from './reducers';

const store = createStore(reducers);

import Container from './containers/Container.js';

class App extends React.Component {
    render() {
        return (
            <div>
              <Container />
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
