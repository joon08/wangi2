import React, { Component } from 'react'
import SearchBtn from '../../SearchBtn'
import './index.less'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  handleClick = () => {
    this.props.history.replace('/personal')
  }

  render() {
    return (
      <div className='header'>
        <span className='logo'>网易严选</span>
        <SearchBtn />
        <button onClick={this.handleClick} className='login'>
          登录
        </button>
      </div>
    )
  }
}

export default withRouter(Header)
