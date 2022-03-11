import React from 'react'
import './playlist.css'
import coming_soon from '../../../icons/Coming soon.png'

function Playlist() {
  return (
    <div className='playlist'>
      <h1>CAS-Playlists</h1>
      <img src={coming_soon} alt="coming soon"/>
    </div>
  )
}

export default Playlist