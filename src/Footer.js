import React, { useEffect } from 'react'
import './Footer.css'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import  PauseCircleOutlined from '@material-ui/icons/Pause'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import { useDataLayerValue } from './DataLayer'
import SpotifyWebApi from 'spotify-web-api-js'
import { useState } from 'react'

const spotify = new SpotifyWebApi();

const Footer = ({playingSongId}) => {
  let currTrackObject = {}
  const [{isPlaying},dispatch] = useDataLayerValue();

  currTrackObject = {...playingSongId}

  console.log('myid',playingSongId)
    
  const pause = () => {
    
    spotify.pause().then(() => {
      dispatch({
       type: 'SET_PLAYING',
       isPlaying: false
    })
    }).catch((err) => {
      if(err.XMLHttpRequest.status == 403) {
        alert('You Are Not Spotify Premium User');
      } else {
        alert('Something Gone Wrong')
      }
      
    });
  }
   const play = () => {
    
     spotify.play().then(() => {
     dispatch({
       type: 'SET_PLAYING',
       isPlaying: true
    })
    }).catch((err) => {
      console.log(err)
      if(err.XMLHttpRequest?.status == 403) {
        alert('You Are Not Spotify Premium User');
      } else {
        alert('Something Gone Wrong')
      }
      
    });;
  }
    





  

  return (
    <div className='footer'>
        <div className="footer__left">
          <img className='footer__albumLogo' src={currTrackObject?.album?.images[0].url} alt="" />
          <div className="footer__songInfo">
            <h4>{currTrackObject.name}</h4>
            <p>{
                currTrackObject.artists?.map((artist) => artist.name).join(', ')
              }</p>
          </div>
        </div>
        <div className="footer__center">
          <ShuffleIcon className="footer__green"/>
          <SkipPreviousIcon className='footer__icon'/>
          {isPlaying ? <PauseCircleOutlined onClick={pause} fontSize='large' className='footer__icon' /> : <PlayCircleOutlineIcon onClick={play} fontSize='large' className='footer__icon' />}
          <SkipNextIcon className='footer__icon'/>
          <RepeatIcon className='footer__green'/>
          
        </div>
        <div className="footer__right">
          <Grid container spacing={2} className='footer_right_grid'>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider"/>
            </Grid>
          </Grid>
        </div>
    </div>
  )
}

export default Footer