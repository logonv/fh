import React from 'react'
import AlbumCard from '../AlbumCard/AlbumCard'
import { album } from '../../constants/album'
import { Typography } from '@mui/material'

const GenreRow = () => {
  return (
      <div>
          <Typography variant='h4'>Genre</Typography>
          
    <div className='albums'>
        <AlbumCard album={album} />
        <AlbumCard album={album} />
        <AlbumCard album={album} />
    </div>
    </div>
  )
}

export default GenreRow