import React from 'react'
import Nav from './Nav'

export default class Products extends React.Component {
  render() {
    return (
      <div className='page page-current'>

        <header className='bar bar-nav'>
          <h1 className='title'>产品</h1>
          </header>

        <Nav item={ 1 }/>

        <div className='content'>
          <h1 style={{ textAlign: 'center' }}>Products</h1>
        </div>
      </div>
    )
  }
}
