import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import s from "./main.module.scss"

import Home from "../Home"
import Landing from "../Landing"
import NotFound from "../NotFound"

export default class Main extends Component {
  render() {
    return (
      <div className={s.container}>
        <header className={s.header}>
          <h2>Header</h2>
        </header>
        <section className={s.content}>
          <div className={s.sidebar}>Sidebar</div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/landing" component={Landing} />
            {/* <Route path="/pledu" component={PleduPage} // LATER /> */}
            <Route path="" component={NotFound} />
          </Switch>
        </section>
      </div>
    )
  }
}
