import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Favorites from "./Pages/Favorites";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Home path="/"></Home>
        <Movie path="/movie/:id"></Movie>
        <Favorites path="/favorites"></Favorites>
      </Router>
    </div>
  );
}

export default App;
