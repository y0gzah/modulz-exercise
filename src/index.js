import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './content/index.css';
import './content/bootstrap.css'

// Main render
ReactDOM.render(<App />, document.getElementById('root'));

// Activate hot module if available
if (module.hot) {
    module.hot.accept();
}