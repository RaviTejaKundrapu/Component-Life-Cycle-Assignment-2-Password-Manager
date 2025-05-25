import {Component} from 'react'
import './index.css'

class PasswordStore extends Component {
  state = {searchInput: '', showPass: false}

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  showPassToogle = () => {
    this.setState(prevState => ({showPass: !prevState.showPass}))
  }

  clickbuttonDel = id => {
    const {ondeleteItem} = this.props
    ondeleteItem(id)
  }

  render() {
    const {passwordData} = this.props
    const {searchInput, showPass} = this.state
    const filterDataList = passwordData.filter(eachObj =>
      eachObj.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className='yourPassword-bg-container'>
        <div className='searchItemContainer'>
          <div className='head_count'>
            <h1 className='PasswordHeading'>Your Passwords</h1>
            <p className='count_style'>{passwordData.length}</p>
          </div>

          <div className='searchContainer'>
            <img
              src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'
              alt='search'
              className='search-icon'
            />
            <hr className='lineBtwIconAndSearch' />
            <input
              type='search'
              className='inputSearch'
              onChange={this.getSearchInput}
              placeholder='search by website name'
            />
          </div>
        </div>
        <hr className='line' />
        <div className='showPasswordCheckBox-container'>
          <input
            className='showPasswordCheckBox'
            type='checkbox'
            id='showPasswordCheckBoxID'
            checked={showPass}
            onChange={this.showPassToogle}
          />
          <label htmlFor='showPasswordCheckBoxID'>Show PassWords</label>
        </div>

        {filterDataList.length === 0 ? (
          <div className='passwordContainerStoreInArray'>
            <img
              src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
              alt='no passwords'
              className='imageNopassword'
            />
            <p className='nopasstext'>No Passwords</p>
          </div>
        ) : (
          <ul className='list-container-ul'>
            {filterDataList.map(eachItem => (
              <li key={eachItem.id} className='list_li'>
                <p>{`website: ${eachItem.website}`}</p>
                <p>{`userName: ${eachItem.userName}`}</p>
                {showPass ? (
                  <p>{eachItem.password}</p>
                ) : (
                  <img
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
                    className='stars-img'
                    alt='stars'
                  />
                )}
                <button
                  type='button'
                  onClick={() => this.clickbuttonDel(eachItem.id)}
                  className='delete-button'
                  data-testid='delete'
                >
                  <img
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png'
                    alt='delete'
                    className='delete-icon'
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default PasswordStore
