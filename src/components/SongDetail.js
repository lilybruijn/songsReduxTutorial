import React from 'react'
import { connect } from 'react-redux'


const SongDetail = ({song}) => {

  if(!song) {
    return <div>No song currently selected.</div>
  }
  return (
    <div className='ui card'>
        <div className='content'>
        <h3>Details for: {song.title}</h3>
        <ul>
            <li>Artist: {song.artist}</li>
            <li>Duration: {song.duration}</li>
        </ul>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail)