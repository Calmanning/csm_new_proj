import './App.css';
import { Component } from 'react';
import Cards from "./Components/Cards/"
import SearchBox from "./Components/SearchBox/"

import React from 'react';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField: ""
    };

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json() )
    .then(users => this.setState({ monsters: users }))
  }

  
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render(){

      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        )

    return (
      <div className = "App">
      <div>
      word
      </div>
      
        <SearchBox placeholder="search for a thing" handleChange={this.handleChange} />
      <Cards monsters={filteredMonsters} />      
      </div>
  );
    }
}

export default App;
