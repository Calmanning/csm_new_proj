import './App.css';
// import Cards from "./Components/Cards/"
// import SearchBox from "./Components/SearchBox/"
import { auth } from "./firebase/firebase.utils"
import HomePage from "./Pages/HomePage/";
import ShopPage from "./Pages/ShopPage/";
import SignInAndSignUpPage from "./Pages/SignInAndSignUpPage/";
import Header from "./Components/Header/";
import { Route, Switch } from "react-router-dom";

import React from 'react';

class App extends React.Component {
 constructor() {
   super();

   this.state = {
     currentUser: null
   }
 }

unsubscribeFromAuth = null

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user })
    console.log(user);
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>


    );
  }
}

export default App;
