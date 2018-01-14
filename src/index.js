import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Layout from './Layout.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


ReactDOM.render(
  React.createElement(Layout),
  document.getElementById('root')
);

