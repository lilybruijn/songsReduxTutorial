import { combineReducers } from 'redux'

const songsReducer = () => {
  return {
    songList: [
        { title: 'Invisible String', artist: 'Taylor Swift', duration: '4:13' },
        { title: 'Betty', artist: 'Taylor Swift', duration: '4:55' },
        { title: 'Mad Woman', artist: 'Taylor Swift', duration: '3:57' },
        { title: 'Mirrorball', artist: 'Taylor Swift', duration: '3:29' }
      ],
    favoriteTitle: 'Betty'
  }
}

const selectedSongReducer = (selectedSong = null, action) => {
    switch(action.type) {
        case 'SONG_SELECTED':
            return action.payload
        default:
            return selectedSong;
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})