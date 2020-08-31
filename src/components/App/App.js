import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../Header/Header';
import PublicOnlyRoutes from '../Utils/PublicOnlyRoutes';
//import PriviteRoutes from '../Utils/PrivateRoutes';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import './App.css';

class App extends Component {
  state = {hasError: false};

  static getDerivedStateFromError(error) {
    console.log(error);
    return {hasError: true};
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className='App__main'>
          <Switch>
            {this.state.hasError && <p className='red'>There was an error! Oh snap!</p>}
            <Route 
              exact
              path={'/'}
              component
            />
            <PublicOnlyRoutes
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoutes
              path={'/register'}
              component={RegisterPage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
