import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import store from "./store"
import Main from "./pages/Main"
import Login from "./pages/Login"
import "./styles/globals.scss"

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
