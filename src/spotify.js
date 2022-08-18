
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectUri = 'http://localhost:3000/' //after authorized
const clientId = 'f72692ef3b5340ca9c361d54988857c0'

const scope = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private",
  "app-remote-control",
  "user-modify-playback-state"
]

export const getTokenFromUrl = ()=> {
    //http://localhost:3000/#access_token=BQCLkpPmcswMAxPt4mHi-o9scHmBKNvUXFHbB4yP5roWqg6-2qZHiz4gxnpXvR6Z_HNyRbq10GPHfndWFview55YbhiWr2BGtWe-xOO7apLuE8FdbzzX3ym_xiuIGH-AUIVC5oqyd6JHHbT3OTyteWF1m68wSnhF_Q_y3KsJW2eXnXZbso-mwvCo4uFCA894CG-SJomhRn9FqPXlzs-0&token_type=Bearer&expires_in=3600
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial
    },{})
 }
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;