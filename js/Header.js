import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionsCreators'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }
  render () {
    console.log(this.props)

    let utilSpace
     // showSearch is true by default when passed in as props
    if (this.props.showSearch) {
       utilSpace = <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
     }
    else {
       utilSpace = (
           <h2>
            <Link to='/search'>Back</Link>
           </h2>
        )
     }
    return (
         <header>
            <h1>
               <Link to='/'>
                  svideo
               </Link>
            </h1>
         {utilSpace}
         </header>
      )
  }
}
const {func, bool, string } = React.PropTypes

Header.propType = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string,
  dispatch: func
}

const mapStateToPros = (state) => {
   return {
      searchTerm: state.searchTerm
   }
}

export default connect(mapStateToPros)(Header)
