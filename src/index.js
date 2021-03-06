import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';


ReactDOM.render(<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>

<App />

</Provider>, document.getElementById('root'));
registerServiceWorker();
