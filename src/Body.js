import  PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import FavouriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Header from './Header'
import SongRow from './SongRow'
import logo from './spotifyLogo.png'
const Body = ({spotify}) => {
  const [state, dispatch] = useDataLayerValue();
  console.log('rendering current playlist',state.currentPlaylist)
  
  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className="body__info">
        <img src={(state.currentPlaylist?.images && state.currentPlaylist?.images[0]?.url) || logo} alt="" />
        <div className="body__infoText">
        <strong>PLAYLIST</strong>
        <h2>{state.currentPlaylist?.name || 'Top Trending'}</h2>
        <p>{state.currentPlaylist?.name || 'Picked For You'}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className='body__shuffel'/>
          <FavouriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>
        
        {state.currentPlaylist?.items ? state.currentPlaylist?.items?.map(item => {
          return(
            <SongRow track={item}/>
          )
        }) : state.currentPlaylist?.tracks?.items?.map(item => {
          return(
            <SongRow track={item.track}/>
          )
        })}
      </div>
    </div>
  )
}

export default Body