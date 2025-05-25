import {Component} from 'react'
import './index.css'
import PasswordInput from '../PasswordInput'

class PasswordManager extends Component {
  render() {
    return (
      <div className="app-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <PasswordInput />
      </div>
    )
  }
}

export default PasswordManager
