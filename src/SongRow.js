import React from 'react'
import { useDataLayerValue } from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';
import './SongRow.css'
const spotify = new SpotifyWebApi();
const SongRow = ({track}) => {
  const [{playingSongId },dispatch] = useDataLayerValue();

  const changePlayingSongId = (id) => {
    
    if(id){

      spotify.getTrack(id).then((response) => {
      console.log('gottrack',response)
    
      dispatch({
        type: 'SET_PLAYING_SONG_ID',
        playingSongId: response
    })
    }).catch((error) => console.log(error))

    console.log('id',id)
    }
  }
  return (
    <div className='songRow'>
        <img className='songRow__album' src={track.album.images[0].url} alt="ok" onClick={() => changePlayingSongId(track?.id)}/>
        <div className="songRow__info">
            <h1 onClick={() => changePlayingSongId(track?.id)}>{track?.name}</h1>
            <p onClick={() => changePlayingSongId(track?.id)}>
                {track?.artists?.map((artist) => artist.name).join(", ")}
            </p>
            
        </div>
    </div>
  )
}

export default SongRow