export const defaultState = {
    user: null,
    playlists: [],
    currentPlaylist: {},
    playingSongId: {},
    playing: false,
    item: null,
    isPlaying: false
    // // remove after developing
    // _token: 'BQDW1xDJofp7EvqCarDEAYl0UK_I9LZ9PsepBcNT7uH2cqMKmsmNk26QfN6vLli7F2CQiYqGocqgcM2Wl3zuT02X57W8D0GOXUvpdvb24ogjtbw02QTJwwY4C2MlHqwRXru0StDSZyPN2ZH0xcqUujt3kAx8CRuCBJz4MvEBV0P5ArwKvcacV87yJzcjpWM0Aqe0mfUSCj9RhtfIz7Wn'
}

const  reducer = (state,action) => {
    console.log('my action is',action.type)
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOP_TRACKS':
            return {
                ...state,
                topTracks: action.topTracks
            }
        case 'SET_PLAYING_SONG_ID': {
            console.log('reducer',action.playingSongId)
            return {
                ...state,
                playingSongId: action.playingSongId
            }
        }
        case  'SET_CURRENT_PLAYLIST':
            return {
                ...state,
                currentPlaylist: action.currentPlaylist,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                _token: action._token
            }
         case 'SET_PLAYING':
            return {
                ...state,
                isPlaying: action.isPlaying
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}
export default reducer;

