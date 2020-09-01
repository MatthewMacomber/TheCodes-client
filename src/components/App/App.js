import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../Header/Header';
import PublicOnlyRoutes from '../Utils/PublicOnlyRoutes';
import PrivateRoutes from '../Utils/PrivateRoutes';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import CodeListPage from '../../routes/CodeListPage/CodeListPage';
import CodePage from '../../routes/CodePage/CodePage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import './App.css';

class App extends Component {
  state = {hasError: false}

  static getDerivedStateFromError(error) {
    console.log(error)
    return {hasError: true}
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
              component={CodeListPage}
            />
            <PublicOnlyRoutes
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoutes
              path={'/register'}
              component={RegisterPage}
            />
            <PrivateRoutes
              path={'/code/:codeId'}
              component={CodePage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
