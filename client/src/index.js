import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AdminStore from './store/AdminStore';
import DeviceStore from './store/DeviceStore';

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
