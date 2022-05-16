import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home  from './Home/Home';
import PokemonGrid  from './PokemonGrid/PokemonGrid';
import PokemonDetails  from './PokemonDetails/PokemonDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from './NavigationBar/NavigationBar';
import PokemonCaptured from './PokemonCaptured/PokemonCaptured';
import ToDoList from './ToDoList/ToDoList';

function App() {
  return (
    <React.Fragment>
  <Router>
    <NavigationBar />
    <Routes>
  <Route exact path="/" element={<Home />} />
  <Route exact path="/pokedex" element={<PokemonGrid />} />
  <Route exact path="/details" element={<PokemonDetails />} />
  <Route exact path="/captured" element={<PokemonCaptured />} />
  <Route exact path="/todolist" element={<ToDoList />} />
</Routes>
  </Router>
</React.Fragment>
  );
}

export default App;
