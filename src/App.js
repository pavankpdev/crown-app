import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage/homepage.component";
import ShopPage from "./Shop/shop.component";
import Header from "./Components/header/header.component";
import SignInAndSignUp from "./Pages/SignIn&SignUp/SignIn&SignUp.component";
import { auth } from "./Firebase/Firebase.utils";
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
