import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// REDUX STORE
import store from './store';
// STYLES
import './styles/styles.scss';

// COMPONENTS
import App from './components/App/App';

// REDUX APP
const LoginReduxApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(LoginReduxApp, document.getElementById('root'));
