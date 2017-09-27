import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware ,compose} from 'redux';
import { BrowserRouter, Route , Switch, Redirect } from 'react-router-dom';
import promise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin'
import Progress from "./workerApp/components/progress"
import Myprofile from "./workerApp/components/myprofile"
import Jobs from "./workerApp/components/jobs"
import reduxThunk from 'redux-thunk';

import { AUTH_USER } from './actions/types';
import WorkerParent from "./workerApp/workerParent"
import WorkerSignup from "./workerApp/workerSignup"

injectTapEventPlugin();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(reduxThunk, promise)
  ));




const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <Route path="/" component={WorkerParent} />
          <Route path='/signup' component={WorkerSignup} />
          <Route path="/progress" component={Progress}/>
          <Route path="/jobs" component={Jobs}/>
          <Route path="/myprofile" component={Myprofile}/>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));