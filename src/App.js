import './App.css';
// import Cards from "./Components/Cards/"
// import SearchBox from "./Components/SearchBox/"
import HomePage from "./Pages/HomePage"
import { Route, Switch } from "react-router-dom"

import React from 'react';

function App() {

    return (
      <div>
      <Switch>
      <Route exact path="/" component={HomePage} />
      {/* <Route path="/hats" component={HatsPage} /> */}
      </Switch>
      </div>

      
  );
}

export default App;
