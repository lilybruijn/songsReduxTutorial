//Action creator function
export const selectSong = (song) => {
    //Return action
    return ({
        type: 'SONG_SELECTED',
        payload: song
    })
}