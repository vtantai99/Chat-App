import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from 'Context/AuthProvider'
import { ThemeGlobalStyle, ThemeProvider } from 'Themes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <AuthProvider>
      <React.StrictMode>
        <ThemeProvider>
          <ThemeGlobalStyle />
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </AuthProvider>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
