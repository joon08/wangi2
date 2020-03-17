import React, { Component } from 'react'
import './index.less'

export default class SearchBtn extends Component {
  render() {
    return (
      <div className='wrap'>
        <i className='iconfont icon-sousuo' />
        <span>搜索商品, 共24027款好物</span>
      </div>
    )
  }
}
