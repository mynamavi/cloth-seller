import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInNSignUpPage from './pages/sign-in-n-sign-up/sign-in-n-sign-up.component';
import Header from './components/header/header.component';



function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        <Route  exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignInNSignUpPage} />
      </Switch>
      
    </div>
  );
}

export default App;
