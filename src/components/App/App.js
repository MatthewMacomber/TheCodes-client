import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
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
        <header className="App-header">
        </header>
        <main className='App__main'>
          <Switch>
            {this.state.hasError && <p className='red'>There was an error! Oh snap!</p>}
            <Route 
              exact
              path={'/'}
              component
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
