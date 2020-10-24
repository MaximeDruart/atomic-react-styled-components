import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import store from "./store"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import theme from "./themes/default"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyle"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
