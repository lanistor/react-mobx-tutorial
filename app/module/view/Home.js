import React from 'react'
import Nav from './Nav'

export default class Home extends React.Component {
  render() {
    return (
      <div className='page page-current'>

        <header className='bar bar-nav'>
          <h1 className='title'>首页</h1>
          </header>

        <Nav item={ 0 }/>

        <div className='content'>
          <h1 style={{ textAlign: 'center' }}>Home</h1>
        </div>
      </div>
    )
  }
}
