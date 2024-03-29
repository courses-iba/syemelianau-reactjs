import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate as PersistProvider } from 'redux-persist/integration/react';
import { IconContext } from 'react-icons';

import './index.css';
import App from './App';
import { store, persistor } from './redux/store';
import reportWebVitals from './reportWebVitals';

const iconContext = { color: '#586069', size: '24' };

ReactDOM.render(
    <React.StrictMode>
        <IconContext.Provider value={iconContext}>
            <ReduxProvider store={store}>
                <PersistProvider loading={null} persistor={persistor}>
                    <App />
                </PersistProvider>
            </ReduxProvider>
        </IconContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
