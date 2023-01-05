import './App.css';
import React, { useState } from "react";
import { render } from "react-dom";
import {BrowserRouter as Router,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./Register";
import Login from './Login';
import Logout from './Logout';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Router>
  );
}

export default App;
