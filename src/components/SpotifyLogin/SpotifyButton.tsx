import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const CLIENT_ID = "d57d55d1b4e14b84a557d9ac73a71e2f";
const CLIENT_SECRET = "7e7aa42cc5ec4befb345f1ffa7cfe6d8";

// user login consts
const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const REDIRECT_URI_AFTER_LOGIN = "http://localhost:5173"

// define scopes array needed from account
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-read-currently-playing", "user-library-read" ];
const SCOPES_URL_PARAMS = SCOPES.join(SPACE_DELIMITER);
 
function SpotifyButton() {
    useEffect(() => {
        if(window.location.hash) {
            const {
                access_token, 
                expires_in, 
                token_type, 
            } = getReturnedParams(window.location.hash);
    
            // !!!!!! LATER !!!!!! : change localstorage for access tokens to a diff type of storage (server?)
            localStorage.clear();
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("tokenType", token_type);
            localStorage.setItem("expiresIn", expires_in);
        }
    })
    
    // function to concatenate spotify Login screen URL
        const handleLogin = () => {
            // console.log('Login clicked')
            // window.location = '${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${SCOPES_URL_PARAMS}&response_type=token&show_dialog=true';
            window.location = SPOTIFY_AUTH_ENDPOINT + '?client_id=' + CLIENT_ID + '&redirect_uri=' + REDIRECT_URI_AFTER_LOGIN + '&scope=' + SCOPES_URL_PARAMS + '&response_type=token&show_dialog=true';
        }
    
        // function to return parameters from Spotify after user logs in
        // example: http://localhost:3000/#access_token=BQCKEnBV0Ull4zACLEi1g0SSYlnGuuq8RW-1l6DT6YGIEl56EaB0Z-lENUhGwTQ_xtrN-Ej0Lh5Gdbaatg1Tk2IPr6e9CW0u8fWedPxehZton8ykEtwGPioNjjFmUMjmK36Hyl4CeDqalYfEblWJObdtoRe2_lYQm3uFVfv8tq19NVMJU6InDaevqMujxdBrvus&token_type=Bearer&expires_in=3600
        const getReturnedParams = (hash) => {
            const stringAfterHashtag = hash.substring(1);
            const paramsInURL = stringAfterHashtag.split("&");
            const paramsSplitUp = paramsInURL.reduce((accumulator, currentValue) => {
                const [key, value] = currentValue.split("=");
                accumulator[key] = value;
                return accumulator;
            }, {});
            return paramsSplitUp;
        }

    return(
        <Button
            onClick={handleLogin}>
            Login Using Spotify
          </Button>
    );
}

export default SpotifyButton;
