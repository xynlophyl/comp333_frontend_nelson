import React, { Component, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Music from './Music.js';
import Signup from './Signup.js';
import NavigationBar from './components/Navbar';
import PrivateRoute from "./components/common/PrivateRoute.js";
import { loadUser } from "./actions/auth"
import { Provider } from "react-redux";
import store from "./store.js";
import Dashboard from "./components/leads/Dashboard.js";
import Alerts from "./components/layout/Alerts.js";
import Register from "./components/accounts/Register.js";
import PropTypes from 'prop-types'
import * as  ReactDOM from "react-dom";


// Alerts
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};


export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route exact path="/music" element={<Music />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/createaccount" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));





/*export default function App() {
Component.componentDidMount(); {
  store.dispatch(loadUser());
}

return (
   <BrowserRouter>
     <NavigationBar></NavigationBar>
     <Routes>
       <PrivateRoute exact path="/music" element={<Music />}></PrivateRoute>
       <Route exact path="/login" element={<Login />}></Route>
       <Route exact path="/createaccount" element={<Signup />}></Route>
     </Routes>
   </BrowserRouter>


 );
}
*/
