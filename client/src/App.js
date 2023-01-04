import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { render } from "react-dom";
import {BrowserRouter as Router,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./Register";

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
  );
}

export default App;
