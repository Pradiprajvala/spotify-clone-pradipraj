import React from 'react'
import { useContext } from 'react'
import { UserContext } from './App'
import Body from './Body'
import Footer from './Footer'
import { useDataLayerValue } from './DataLayer'
import './Player.css'
import Sidebar from './Sidebar'
import { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();
const Player = ({spotify}) => {
  const [state, dispatch] = useDataLayerValue();
  
  

  console.log('i m called');
  return (
    <div className='player'>
        <div className="player__body">
       <Sidebar />
       <Body spotify={spotify}/>
       </div>
       <Footer playingSongId={state.playingSongId} /> 
    </div>
  )
}

export default Player