import React           from 'react';
import ReactDOM        from 'react-dom';

import { createStore } from 'redux';
import { Provider }    from 'react-redux';

import reducers        from './reducers';

const store = createStore(reducers);

import MainPage from './components/pages/MainPage';

class App extends React.Component {
    render() {
        return (
            <MainPage />
        );
    }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
