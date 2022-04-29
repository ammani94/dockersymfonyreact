import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home  from './Home/Home';
import PokemonGrid  from './PokemonGrid/PokemonGrid';
import PokemonDetails  from './PokemonDetails/PokemonDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from './NavigationBar/NavigationBar';

function App() {
  return (
    <React.Fragment>
  <Router>
    <NavigationBar />
    <Routes>
  <Route exact path="/" element={<Home />} />
  <Route exact path="/pokedex" element={<PokemonGrid />} />
  <Route exact path="/details" element={<PokemonDetails />} />
</Routes>
  </Router>
</React.Fragment>
  );
}

export default App;
