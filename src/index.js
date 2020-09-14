import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {CodeListProvider} from './contexts/CodeListContext';
import {CodeProvider} from './contexts/CodeContext';
import App from './components/App/App';
import './index.css';

document.title = 'The Codes';

ReactDOM.render(
  <BrowserRouter>
    <CodeListProvider>
      <CodeProvider>
        <App />
      </CodeProvider>
    </CodeListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
