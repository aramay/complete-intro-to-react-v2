import React from 'react'

var MyTitle = React.createClass({
  render: function () {
    console.log(this.props)

    const color = {color: this.props.color}
    console.log(color)
    return (
        <div>
          <h1 style={color}>
            {this.props.title}
          </h1>
        </div>
    )
  }
})

export default MyTitle
