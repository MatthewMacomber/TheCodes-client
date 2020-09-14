import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import PublicOnlyRoutes from '../Utils/PublicOnlyRoutes';
import PrivateRoutes from '../Utils/PrivateRoutes';
import AdminRoutes from '../Utils/AdminRoutes';

import './App.css';

import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import CodeListPage from '../../routes/CodeListPage/CodeListPage';
import CodePage from '../../routes/CodePage/CodePage';
import AdminLogin from '../../routes/AdminPage/AdminLogin';
import AdminPage from '../../routes/AdminPage/AdminPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import UserPage from '../../routes/UserPage/UserPage';
import HomePage from '../../routes/HomePage/HomePage';
import UserHomePage from '../../routes/UserHomePage/UserHomePage';
import UserCodesPage from '../../routes/UserCodesPage/UserCodesPage';
import CreateCodePage from '../../routes/CreateCodePage/CreateCodePage';
import UserAnswersPage from '../../routes/UserAnswersPage/UserAnswersPage';
import AnswerPage from '../../routes/AnswerPage/AnswerPage';



class App extends Component {
  state = {
    hasError: false,
    loggedIn: false
  };

  static getDerivedStateFromError(error) {
    return {hasError: true};
  };

  login = loginState => {
    this.setState({
      loggedIn: loginState
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header loggedIn={this.state.loggedIn} login={this.login}/>
        </header>
        <main className='App__main'>
          <Switch>
            {this.state.hasError && <p className='red'>There was an error! Oh snap!</p>}
            <Route 
              exact
              path={'/'}
              component={HomePage}
            />
            <Route 
              exact
              path={'/codes'}
              component={CodeListPage}
            />
            <PublicOnlyRoutes
              path={'/login'}
              component={() => <LoginPage login={this.login} />}
            />
            <PublicOnlyRoutes
              path={'/register'}
              component={RegisterPage}
            />
            <PublicOnlyRoutes 
              exact
              path={'/admin'}
              component={() => <AdminLogin login={this.login}/>}
            />
            <PrivateRoutes
              path={'/userhome'}
              component={UserHomePage}
            />
            <PrivateRoutes
              path={'/answers'}
              component={UserAnswersPage}
            />
            <PrivateRoutes
              path={'/answer/:answer_id'}
              component={AnswerPage}
            />
            <PrivateRoutes
              path={'/create'}
              component={UserCodesPage}
            />
            <PrivateRoutes
              path={'/createcode'}
              component={CreateCodePage}
            />
            <PrivateRoutes
              path={'/code/:codeId'}
              component={CodePage}
            />
            <AdminRoutes
              exact
              path={'/admin/panel'}
              component={AdminPage}
            />
            <AdminRoutes
              path={'/user/:user_id'}
              component={UserPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
        <footer className="App__Footer">
          <Footer />
        </footer>
      </div>
    );
  };
};

export default App;
