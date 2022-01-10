import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

import './App.css';

import HomePage from './pages/home/home';
import ShopPage from './pages/shop/shop';
import ContactPage from './pages/sign-in-sign-up/sign-in-sign-up';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import Header from './components/header/header';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userCollectionRef = await createUserProfileDocument(userAuth);

        userCollectionRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render () {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser}/>
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

export default App;