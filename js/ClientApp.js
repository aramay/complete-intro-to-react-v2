// var firstComponent = <h1>hello</h1>;//this throws an error

var MyTitle = React.createClass({
    render: function(){
        return(
            React.DOM.div(null,
            React.DOM.h1(null, "check out second component"))
        )
    }
})

var firstComponent = React.createClass({
    render: function(){
        return (
            React.DOM.div(null,
            // React.DOM.h1(null, "this is react firstComponent"))
            React.createElement(MyTitle),
            React.createElement(MyTitle)
            )
        )
    }
})

ReactDOM.render(
    React.createElement(firstComponent),
    // firstComponent, this will not work, check console errors
    document.getElementById('app')
);