import HomeIcon from '@material-ui/icons/Home'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import SearchIcon from '@material-ui/icons/Search'

import React from 'react'
import { useDataLayerValue } from './DataLayer'
import'./Sidebar.css'
import SidebarOption from './SidebarOption'
const Sidebar = () => {
  const [{playlists,currentPlaylist}] = useDataLayerValue();

  const clickHandler = () => {
            // dispatch({
            //   type: 'SET_CURRENT_PLAYLIST',
            //   currentPlaylist: playlist
            // })
           // console.log('state after dispatch',currentPlaylist);
           console.log('hello');
          }
   
  return (
    <div className='sidebar'>
        <img className='sidebar__logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=' ' />
        <p>by PradipRaj</p>
        <SidebarOption Icon={HomeIcon} title='Home' />
        <SidebarOption Icon={SearchIcon} title='Search' />
        <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />
        
        <strong className="sidebar__title">PLAYLIST</strong>
        <hr/>
        
       {
        playlists && playlists.items && playlists.items.map((playlist) => {

          return (
          <SidebarOption key={playlist.id} playlist={playlist} />
          )
        //title={playlist.name} onClick={() => console.log('okokok')
       })

      } 
    </div>
  )
}

export default Sidebar