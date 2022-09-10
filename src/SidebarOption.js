import React from 'react'
import './SidebarOption.css'
import { useDataLayerValue } from './DataLayer'
import SpotifyWebApi from 'spotify-web-api-js';
const SidebarOption = ({ playlist,Icon, title}) => {
   const [{ currentPlaylist}, dispatch] = useDataLayerValue();
  const spotify = new SpotifyWebApi();
  const clickHandler = () => {

    if(!(playlist && playlist.items)){
      spotify.getPlaylist(playlist.id).then(response => dispatch({
      type: 'SET_CURRENT_PLAYLIST',
      currentPlaylist: response
    }));
    } else {
      dispatch({
             type: 'SET_CURRENT_PLAYLIST',
             currentPlaylist: playlist
           })
    }

             
          
          //  console.log('hello');
  }
 
  return (
    <div className="sidebarOption">
      
        {Icon&& <Icon className='sidebarOption__icon'/>}
        {
            Icon ?  <h4>{title}</h4>: <p onClick={clickHandler}>{playlist?.name}</p>
        }
    </div>
    
  )
}

export default SidebarOption