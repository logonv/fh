import React from 'react'
import { useParams } from 'react-router-dom'

const AlbumDetails = ({fetchedAlbums}) => {


    let {albumkey} = useParams()
    const albumArr = fetchedAlbums.filter((album) => {
        if (album.id == albumkey){
            console.log('key match')
            return album
        }
        else{
            return false
        }

    })
    console.log(albumArr)
    const album = albumArr[0]
    console.log(album)
  return (
    <div>

        {album.name}
    </div>
  )
}

export default AlbumDetails