import React, { Component } from "react"

import s from "./login.module.scss"

export default class Login extends Component {
  render() {
    return (
      <div className={s.container}>
        <h2>Login</h2>
        <form>
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    )
  }
}
