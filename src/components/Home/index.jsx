import React, { Component } from 'react'
import Header from './Header/Header'
import TopNav from './TopNav/TopNav'
import './index.less'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header />
        <TopNav />
      </div>
    )
  }
}
