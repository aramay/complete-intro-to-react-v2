import React from 'react'
const { shape, string } = React.PropTypes

const Details = React.createClass({
   propsTypes: {
      show: shape({
         title: string,
         year: string,
         poster: string,
         description: string,
         trailer: string
      })

   },


   render () {

      const { poster, title, year, description, trailer } = this.props.show
      console.log(this.props)
      
      return (

      <div className='details'>
         <header>
            <h1>svideo</h1>
         </header>
         <section>
            <h1>{title}</h1>
            <h2>({year})</h2>
            <img src={`/public/img/posters/${poster}`} />
            <p>{description}</p>
         </section>
         <div>
            <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
         </div>
      </div>
            
      )
   }
})

// stateless compponent can take props -> query params property

// const Details = (props) => {
//   return <h1>stateless component </h1>
// }

export default Details

