import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
// import logo from './logo.svg';
import './App.css';

// components
import Auth from './components/auth/Auth'
import DashboardHome from './components/dashboard/DashboardHome'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <DashboardHome />
            </Route>
            <Route exact path="/auth">
              <Auth />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
