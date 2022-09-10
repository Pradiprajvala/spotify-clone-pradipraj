import React, {useEffect} from 'react'
import Login from './Login';
//f72692ef3b5340ca9c361d54988857c0
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css'
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
//192.168.56.151
const spotify = new SpotifyWebApi();

export const UserContext = React.createContext();

function App() {
  
  const [{_token,topTracks,playingSongId},dispatch] = useDataLayerValue();

  useEffect(() =>  {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){
      spotify.setAccessToken(_token);
      dispatch({type:'SET_TOKEN',_token})
      
       spotify.getMe().then(user => {
        dispatch({type: 'SET_USER', user })
       })
      
      spotify.getUserPlaylists().then((playlists) => {
       dispatch({
          type: 'SET_PLAYLIST',
         playlists
        })
      }) 

      spotify.getMyTopTracks().then((topTracks) => {
        dispatch({
          type: 'SET_CURRENT_PLAYLIST',
          currentPlaylist: topTracks
        })
        dispatch({
          type: 'SET_TOP_TRACKS',
          topTracks
        })
      })
      
      spotify.getMyCurrentPlaybackState().then((response)=>{
      console.log('current playback track', response);
      console.log('current playback track id', response.item.id)
    
      dispatch({
        type: 'SET_PLAYING_SONG_ID',
        playingSongId: response.item ? response.item : {},
      })
      
      
    }).catch((error) => console.log(error))
  
      



    // spotify.getPlaylist('3KoRxA56rJexMTpSotNJ8P').then(response => dispatch({
    //   type: 'SET_DISCOVER_WEEKLY',
    //   discover_weekly: response,
    // }));
  }
  }, [])
  
  // console.log(window.location);
  
  return (
    <div className="app">
      
      {
        _token ? <Player spotify /> : <Login />
      }
      
      
      {/* Spotify Logo */}
      {/*Login With Spotify Button*/}
      
    </div>
  );
}

export default App;
