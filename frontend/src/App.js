import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Music from './Music.js';
import Signup from './Signup.js';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/music" element={<Music />}></Route>
                <Route exact path="/" element={<Login />}></Route>
                <Route exact path="/createaccount" element={<Signup />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
