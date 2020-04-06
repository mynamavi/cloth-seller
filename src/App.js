import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInNSignUpPage from './pages/sign-in-n-sign-up/sign-in-n-sign-up.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils.js';


class  App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
    })
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth();
  }

  
  render(){
    return (
      <div className="">
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route  exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/signin' component={SignInNSignUpPage} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
