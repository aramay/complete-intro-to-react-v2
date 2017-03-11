import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

// var MyTitleFactory = React.createFactory(MyTitle)

var firstComponent = React.createClass({
  render: function () {
    return (
        <div>
            <MyTitle title='this is props' color='goldenrod' />
            <MyTitle title='this is another props' color='aquamarine' />
        </div>
    )
  }
})

ReactDOM.render(
    React.createElement(firstComponent),
    // firstComponent, this will not work, check console errors
    document.getElementById('app')
)

/** (
        React.DOM.div(null,
        // React.DOM.h1(null, "this is react firstComponent"))
        // React.createElement(MyTitle),
        // React.createElement(MyTitle)
            MyTitleFactory({title: 'this is being passed as props', color: 'goldenrod'}),
            MyTitleFactory({title: 'this as well, props', color: 'aquamarine'})
        ) */
