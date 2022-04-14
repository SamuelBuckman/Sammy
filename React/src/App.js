
import './App.css';
import DisplayName  from './components/DisplayName';
import React, { Component } from 'react';
import MovieList from './components/MovieList';
// import { render } from 'react-dom';


function App() {
  const name = "Ranking";
  const isOnline = true;

  function handleClick() {
    console.log('123');
  }
  const movies =[
    'sammy games',
    'Captain America',
    'Iron Man',
    'Black Panther',
    'Avengers Endgame',
    'Captain Marvel',
];
  
  return (
    <div className="App">
       <MovieList movies={movies} onClick={handleClick}/>

       <h1>Hello react!!!</h1>
       <h2> {name}</h2>
       <h3>{isOnline ? 'Online' : 'Offline'}</h3>
       <DisplayName />
       <button onClick={handleClick} onMouseEnter={handleClick}>Click me
       </button> 
     </div>
  );
}








export default App;
