import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {GoogleOAuthProvider} from '@react-oauth/google';
import {Toaster} from 'react-hot-toast'

import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducer/index.js'
import { Toast } from 'react-bootstrap';


const store = configureStore({
  reducer: rootReducer
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <Provider  store={store}>
      <App />
      <Toaster/>
  </Provider> 
  </React.StrictMode>,
)
