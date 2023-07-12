import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const appElement = document.getElementById('app');

if (appElement !== null) {
  const Root = createRoot(appElement);
  Root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
  )
} else {
  console.error('No se encontró ningún elemento con el ID "app".');
}