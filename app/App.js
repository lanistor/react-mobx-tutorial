import { observable } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link } from 'react-flex-router'

import Home from './module/view/Home'
import Products from './module/view/Products'

export class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className='page-group'>
          <Route index path='/home>' component={ Home } />
          <Route path='/products' component={ Products } />
        </div>
      </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
