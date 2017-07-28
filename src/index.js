import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './store'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

window.firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch({ type: 'USER_AUTHENTICATED', payload: user })
  } else {
    store.dispatch({ type: 'USER_UNAUTHENTICATED', payload: {} })
  }
})

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

registerServiceWorker();
