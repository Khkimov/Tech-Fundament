import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AdminStore from './store/AdminStore';
import DeviceStore from './store/DeviceStore';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    admin: new AdminStore(),
    device: new DeviceStore()
  }}>
    <App />
  </Context.Provider>
);
