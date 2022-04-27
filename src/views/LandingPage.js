import React from 'react'
import AlbumCard from '../components/AlbumCard/AlbumCard'
import { album } from '../constants/album'

const LandingPage = () => {

    
  return (
    <div id = 'albums'><AlbumCard album={album}/>
    <AlbumCard album={album}/>
    </div>
  )
}

export default LandingPage