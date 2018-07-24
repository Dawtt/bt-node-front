/*some function descriptions from https://medium.com/@jonnykalambay/now-playing-using-spotifys-awesome-api-with-react-7db8173a7b13*/

import React, { Component } from 'react';
import '../App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import 'typeface-roboto';

/*// react-scripts accomplishes .env protocol, this is not needed with it. This needs to be above any variable assignments using .env environment variables. 'dotenv' is imported in package.json, and used for .env configuration in development.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
    console.log("dotenv is being required.")
}*/

const backend_node_login_uri = process.env.REACT_APP_BACKEND_NODE_LOGIN_URI;
const backend_node_logout_uri = process.env.REACT_APP_BACKEND_NODE_LOGOUT_URI


const spotifyApi = new SpotifyWebApi();

class App extends Component {
    constructor(){
        super();
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
            /*Instead of manually coding our API requests, we’re going to use a library, which was created by José M. Pérez, a Spotify engineer, that abstracts pretty much every API call we could need.*/
            spotifyApi.setAccessToken(token);
            // update state here?
        }
        this.state = {
            loggedIn: token ? true : false,
            nowPlaying: {name: '', albumArt: ''},
            currentuser: {id: '', name: '',},
        }


    }

    /*Now we just need to pull the token from the query sting into our react app and we can use it. There are many ways to do this, but I’m lazy so I copied the function getHashParams from the example code that we cloned (found in auth-server/authorization_code/public/index.html), and made a slight change just to silence create-react-app’s picky linter. The function returns an object with the parameters as properties.*/
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q);
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }

    render() {
        return (
            <div
                className='App'>
                <a href={backend_node_login_uri}>
                    Login to Spotify </a>
                <a href={backend_node_logout_uri}>
                    Logout
                </a>
            </div>
        )
    }
}

export default App;
