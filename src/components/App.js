import React from 'react'
import SongDetail from './SongDetail'
import SongList from './SongList'

const App = () => {
  return (
    <div className='ui container'>
        <div className='ui grid'>
            <div className='column six wide'>
                <SongList />
            </div>
            <div className='column six wide'>
                <SongDetail />
            </div>            
        </div>
    </div>
  )
}

export default App