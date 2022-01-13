import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user-action';

import HomePage from './pages/home/home';
import ShopPage from './pages/shop/shop';
import ContactPage from './pages/sign-in-sign-up/sign-in-sign-up';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import Header from './components/header/header';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userCollectionRef = await createUserProfileDocument(userAuth);

        userCollectionRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render () {
    return (
      <div className='App'>
        <Header/>
        <Routes>
          <Route exact path='/signin' element={<SignInSignUpPage />} />
          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='/shop' element={<ShopPage />} />
          <Route exact path='/' element={<HomePage />} />
        </Routes>
      </div>
    );
  }
}

/*
	SETS the current state of the user into the 
  root reducer, and returns it from the function
*/
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

/* 
	Returns and exports a higher order function with 
	the current user state attached to the header, as 
	a prop
*/
export default connect(null, mapDispatchToProps)(App);