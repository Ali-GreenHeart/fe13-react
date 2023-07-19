import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import FullNameContext from './context/FullNameContext';
import DarkModeContextComponent from './context/DarkModeContext';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

const rootElem = document.getElementById('root')

const store = createStore(rootReducer)

ReactDOM.createRoot(rootElem).render(
    <Provider store={store}>
        <DarkModeContextComponent>
            <FullNameContext>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </FullNameContext>
        </DarkModeContextComponent>
    </Provider>
)
