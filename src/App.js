import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions"
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";

import './App.css';


import HomePage from "./Pages/HomePage/";
import ShopPage from "./Pages/ShopPage/";
import SignInAndSignUpPage from "./Pages/SignInAndSignUpPage/";
import CheckoutPage from "./Pages/CheckoutPage/"
import Header from "./Components/Header/";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"




class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });



      }

      setCurrentUser(userAuth)

    });
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
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact path="/signin"
            render={() =>
              this.props.currentUser ?
                (<Redirect to="/"
                />
                ) : (
                  <SignInAndSignUpPage />
                )}
          />
        </Switch>
      </div>


    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
