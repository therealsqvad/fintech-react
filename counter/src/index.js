import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Counter
                    step = {1} 
                    init = {0} 
                    max = {5} 
                    message = 'Count is max'
                />,
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
