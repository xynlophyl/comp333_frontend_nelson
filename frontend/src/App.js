import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from './Music.js';
import NewLogin from './newLogin.js';
import NewSignup from './newSignUp.js';
import NavigationBar from './components/Navbar';
import Favorite from "./favorites.js";
import Homescreen from "./home.js";

export default function App() {
    return (
        <BrowserRouter>
        <NavigationBar></NavigationBar>
          <Routes>
            <Route exact path="/music" element={<Music />}></Route>
            <Route exact path="/newLogin" element={<NewLogin />}></Route>
            <Route exact path="/newSignup" element={<NewSignup />}></Route>
            <Route exact path="/favorites" element={<Favorite />}></Route>
            <Route exact path="/home" element={<Homescreen />}></Route>

         </Routes>
         </BrowserRouter>


    );
};
