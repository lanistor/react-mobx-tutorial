import React from 'react'
import { Link, Control } from 'react-keeper'

export default function Nav(props) {
  return (
    <nav className='bar bar-tab'>
      {
        navData.map((item, index)=> {
          return (
            <Link to={ item.path } className='tab-item external'
                activeClassName='active' isActive={ props.item === index } key={ index } >
              <span className={ 'icon ' + item.icon }></span>
              <span className='tab-label'>{ item.title }</span>
            </Link>
          )
        })
      }
    </nav>
  )
}

const navData = [
  { path: '/home', title: '首页', icon: 'icon-star' },
  { path: '/products', title: '产品', icon: 'icon-settings' }
]
