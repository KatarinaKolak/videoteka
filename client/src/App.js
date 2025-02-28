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
import Director from './Director';
import EditDirector from './EditDirector';
import AddDirector from './AddDirector';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import Movie from './Movie';
import Home from './Home';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/directors" element={<Director />} />
            <Route path="/addMovie" element={<AddMovie />} />
            <Route path="/addDirector" element={<AddDirector />} />
            <Route path="/editDirector/:id" element={<EditDirector />} />
            <Route path="/editMovie/:id" element={<EditMovie />} />
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/details/:id" element={<MovieDetails />} />
          </Routes>
        </Router>
  );
}

export default App;
