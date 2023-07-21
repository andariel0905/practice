import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const appElement = document.getElementById('app');

if (appElement !== null) {
  const Root = createRoot(appElement);
  Root.render(
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  )
} else {
  console.error('No se encontró ningún elemento con el ID "app".');
}