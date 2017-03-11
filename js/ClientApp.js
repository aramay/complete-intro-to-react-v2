import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyTitleFactory = React.createFactory(MyTitle)

var firstComponent = React.createClass({
  render: function () {
    return (
        React.DOM.div(null,
        // React.DOM.h1(null, "this is react firstComponent"))
        // React.createElement(MyTitle),
        // React.createElement(MyTitle)
            MyTitleFactory({title: 'this is being passed as props', color: 'goldenrod'}),
            MyTitleFactory({title: 'this as well, props', color: 'aquamarine'})
        )
    )
  }
})

ReactDOM.render(
    React.createElement(firstComponent),
    // firstComponent, this will not work, check console errors
    document.getElementById('app')
)
