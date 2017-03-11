import React from 'react'
import {render} from 'react-dom'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        
      </div>

    )
  }
})

render(<App />, document.getElementById('app'))
