import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Music from './Music.js';
import Signup from './Signup.js';
import NavigationBar from './components/Navbar';

export default function App() {
    return (
        <BrowserRouter>
        <NavigationBar></NavigationBar>
          <Routes>
            <Route exact path="/music" element={<Music />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/createaccount" element={<Signup />}></Route>
         </Routes>
         </BrowserRouter>


    );
}
