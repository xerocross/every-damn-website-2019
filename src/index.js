import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


try {
    // this is just to annoy users with a request to 
    // push notifications if the API is available
    if (Notification) {
        Notification.requestPermission().then(function (result) {
        });
    }
} catch(e) {
    // do nothing
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
