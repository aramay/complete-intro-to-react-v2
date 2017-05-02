import React from 'react'

const ShowCard = React.createClass({
  render () {
    //   console.log(this.props.show)
    const { poster, title, year, description } = this.props.show
    
    return (

        <div className='show-card'>
            <img src={`/public/img/posters/${poster}`} alt={title} />

            <div>
                <h3>{title}</h3>
                <h4>{year}</h4>
                <p>{description}</p>
            </div>
        </div>
      )
  }
})

export default ShowCard

