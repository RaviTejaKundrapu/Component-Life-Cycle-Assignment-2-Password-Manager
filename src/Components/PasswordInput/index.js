import {Component} from 'react'
import './index.css'
import {v4 as uuidV4} from 'uuid'
import PasswordStore from '../PasswordStore'

class PasswordInput extends Component {
  state = {website: '', userName: '', password: '', dataList: []}

  websiteTake = event => {
    this.setState({website: event.target.value})
  }

  usernameTake = event => {
    this.setState({userName: event.target.value})
  }

  passwordTake = event => {
    this.setState({password: event.target.value})
  }

  onSubmitData = event => {
    const {website, userName, password} = this.state
    event.preventDefault()

    const newItem = {
      id: uuidV4(),
      website,
      userName,
      password,
    }

    this.setState(prevState => ({
      dataList: [...prevState.dataList, newItem],
      website: '',
      userName: '',
      password: '',
    }))
  }

  ondeleteClickedItem = id => {
    const {dataList} = this.state
    const filterItems = dataList.filter(each => each.id !== id)

    this.setState({dataList: filterItems})
  }

  render() {
    const {website, userName, password, dataList} = this.state
    // console.log(website, userName, password)
    // console.log(dataList)

    return (
      <div className="PasswordInput-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          alt="password manager"
          className="password-manager-img"
        />
        <div className="input-container-master">
          <h1 className="input-add-pass-heading">Add New Password</h1>
          <form className="form-container" onSubmit={this.onSubmitData}>
            <div className="eachinput-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-bar-icons"
              />
              <hr className="line-btw-icon-input" />
              <input
                type="text"
                placeholder="Enter Website"
                className="inputBox"
                onChange={this.websiteTake}
                value={website}
              />
            </div>

            <div className="eachinput-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-bar-icons"
              />
              <hr className="line-btw-icon-input" />
              <input
                type="text"
                placeholder="Enter Username"
                className="inputBox"
                onChange={this.usernameTake}
                value={userName}
              />
            </div>

            <div className="eachinput-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-bar-icons"
              />
              <hr className="line-btw-icon-input" />
              <input
                type="password"
                placeholder="Enter Password"
                className="inputBox"
                onChange={this.passwordTake}
                value={password}
              />
            </div>
            <button className="btn-add" type="submit">
              Add
            </button>
          </form>
        </div>
        <PasswordStore
          passwordData={dataList}
          ondeleteItem={this.ondeleteClickedItem}
        />
      </div>
    )
  }
}

export default PasswordInput
