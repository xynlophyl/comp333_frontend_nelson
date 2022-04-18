import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Music from './Music.js';
import Home from './Home.js';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/music" element={<Music />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    );
}