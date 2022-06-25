import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {
    renderList() {
        return (
            this.props.songs.songList.map(song => {
                return <div className='ui card button'  onClick={() => {
                    this.props.selectSong(song);
                }}>
                    <div className='content'>
                        <h4>{song.title}
                        {song.title === this.props.songs.favoriteTitle && <i className='icon star'></i>}</h4>
                    </div>
                </div>
            })
        )
    }
    render() {
        return this.renderList()
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { selectSong })(SongList)