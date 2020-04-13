import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'; 
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInNSignUpPage from './pages/sign-in-n-sign-up/sign-in-n-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import {auth, createUserProfileDocument, addCollectionAndDocument} from './firebase/firebase.utils.js';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';
import {selectCollectionsForPreview} from './redux/shop/shop.selectors';

class  App extends React.Component {
   unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser, collectionsArray} = this.props;
    console.log(collectionsArray);
    addCollectionAndDocument('collections', 
        collectionsArray.map( ({title, items}) => ({title, items})));

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
                id:snapShot.id, ...snapShot.data()
            }
          );
        });
      }
      setCurrentUser( userAuth );
      
      
    });
    
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth();
  }

  
  render(){
    return (
      <div className="">
        <Header />
        <Switch>
          <Route  exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  exact path='/checkout' component={CheckOutPage} />
          <Route  exact 
            path='/signin'
            render= {() => this.props.currentUser ?  
              (<Redirect to='/' />) : (<SignInNSignUpPage />)}
             />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray : selectCollectionsForPreview
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
