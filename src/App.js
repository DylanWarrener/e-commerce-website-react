// Default react 
import React from 'react';

// React router
import { Routes, Route } from 'react-router-dom';

// React redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';

// Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.util';

// Pages
import HomePage from './pages/home/home';
import ShopPage from './pages/shop/shop';
import ContactPage from './pages/sign-in-sign-up/sign-in-sign-up';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';

// components
import Header from './components/header/header';
import Footer from './components/footer/footer';

// Stylesheet
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
          })
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
        <Header />
        <Routes>
          <Route exact path='/signin' element={<SignInSignUpPage />} />
          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='/shop' element={<ShopPage />} />
          <Route exact path='/' element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

/*
	SETS the state of the current user object 
*/
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

/* 
	Returns and exports a higher order function with 
	the current user state attached to the app, as 
	a prop
*/
export default connect(null, mapDispatchToProps)(App);