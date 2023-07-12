import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import FullNameContext from './context/FullNameContext';
import DarkModeContextComponent from './context/DarkModeContext';

const rootElem = document.getElementById('root')

ReactDOM.createRoot(rootElem).render(
    <DarkModeContextComponent>
        <FullNameContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </FullNameContext>
    </DarkModeContextComponent>
)
