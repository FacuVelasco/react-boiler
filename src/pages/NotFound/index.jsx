import React, { Component } from "react"

import s from "./notFound.module.scss"

export default class Login extends Component {
  render() {
    return (
      <div className={s.container}>
        <h2>404</h2>
        <p>page not found</p>
      </div>
    )
  }
}
