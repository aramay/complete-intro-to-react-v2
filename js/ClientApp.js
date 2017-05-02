import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render: function () {
    return (
        <BrowserRouter>
            <div className='app'>
                <Match exactly pattern='/' component={Landing}></Match>
                <Match pattern='/search' component={Search}></Match>
            </div>
        </BrowserRouter>
      )
  }
})

render(<App />, document.getElementById('app'))

