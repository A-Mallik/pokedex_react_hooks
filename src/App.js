import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import React, { Component, useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setpokemonName] = useState('bulbasaur');
  //========================================
  // state = {
  //     pokemon : [],
  // }

  // componentDidMount(){
  //     fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  //     .then(res => res.json())
  //     .then(data => this.setState({pokemon: data}))
  // }
  // render(){
  // console.log(this.state.pokemon)
  //========================================

  useEffect(() => {
    // use hook effects - when variable changes - replaces comp.did.mount
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data);
      });
  }, []); //second argument is dependancy when useEffect is called, but empty array gives it a constnat dependancy (because you cant change empty thing)
  //if we put a viarable in there, it will call function when it cahnges
  console.log(pokemon);

  console.log("Pokemon Name", pokemonName);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form
          onSubmit={useEffect(() => {
            setpokemonName(document.getElementById("nameSearch").value);
            console.log("Name", document.getElementById("nameSearch").value);
          })} >
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" id="nameSearch" />
        </form>
        {
          <Card pokemon={pokemon} />
        }
      </header>
    </div>
  );
}

export default App;
