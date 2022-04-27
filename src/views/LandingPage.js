import React from 'react'

import GenreRow from '../components/GenreRow/GenreRow'
// import resultsGroupByGenre from '../constants/albumsGroupByGenre'

const LandingPage = ({resultsGroupByGenre}) => {
    console.log(resultsGroupByGenre)
    const keys = Object.keys(resultsGroupByGenre)
    console.log('keys', keys)
    
  return (
    <div>
        {keys.map(key =>{
            return(
            <GenreRow key={`genre_${key}`} genreAlbumsObject={resultsGroupByGenre[key]} />
            )

        })}
        

        

    </div>
  )
}

export default LandingPage