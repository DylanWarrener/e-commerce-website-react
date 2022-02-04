import React from 'react';

// React router
import { Routes, Route, Navigate } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';

// Reselect 
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';

// Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.util';

// Pages
import HomePage from './pages/home/home';
import ShopPage from './pages/shop/shop';
import ContactPage from './pages/contact/contact';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import CheckoutPage from './pages/checkout/checkout';

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
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route 
            path='signin' 
            element={
              this.props.currentUser ? <Navigate replace to='/'/> : <SignInSignUpPage />
            }
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

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
export default connect(mapStateToProps, mapDispatchToProps)(App);