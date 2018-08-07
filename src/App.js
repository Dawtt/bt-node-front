/*some function descriptions from https://medium.com/@jonnykalambay/now-playing-using-spotifys-awesome-api-with-react-7db8173a7b13*/

import React, { Component, Fragment, LinkHTMLAttributes } from 'react';
import './App.css';
import { Header, Footer, Exercises, Dave} from './Components/Layouts/index.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import SpotifyWebApi from 'spotify-web-api-js';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import  {ArtistsListRedux} from './Components/ArtistsListRedux'


import fire from './config/Fire';
import FirebaseLogin from './Components/FirebaseLogin';
import FirebaseHome from './Components/FirebaseHome';
import FirebaseDrawer from './Components/FirebaseDrawer';


import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


/*// react-scripts accomplishes .env protocol, this is not needed with it. This needs to be above any variable assignments using .env environment variables. 'dotenv' is imported in package.json, and used for .env configuration in development.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
    console.log("dotenv is being required.")
}*/

const spotifyLoginUrl = process.env.REACT_APP_BACKEND_NODE_LOGIN_URI;
const spotifyLogoutUrl = process.env.REACT_APP_BACKEND_NODE_LOGOUT_URI;
const piServerAddress = 'http://127.0.0.1:5000/';

const spotifyApi = new SpotifyWebApi();
var playlistJsonTemplate = {employees: [], attributes: [], pageSize: 2, links: {}};



class Form1 extends Component{
    render(){
        return (
            <div class="form">
                <form action={piServerAddress} method="get">
                    Enter Track ID: <input type="songid" name="place"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}


class FormSearchBar extends Component {

    constructor() {
        super();
        this.state = {
            songsearchbar: {}
        }
    }


        render() {
            return (
                <div class="form">
                    <form action="http://localhost:5000/result" method="get">
                        Enter Song Name: <input type="text" name="place"/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            );
        }

}


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
});

function PinnedSubheaderList(props) {
    const { classes } = props;

    return (
        <List className={classes.root} subheader={<li />}>
            {[0, 1, 2, 3, 4].map(sectionId => (
                <li key={`section-${sectionId}`} className={classes.listSection}>
                    {[0, 1, 2].map(item => (
                        <ListItem key={`item-${sectionId}-${item}`}>
                            <ListItemText primary={`Item ${item}`} />
                        </ListItem>
                    ))}
                </li>
            ))}
        </List>
    );
}

PinnedSubheaderList.propTypes = {
    classes: PropTypes.object.isRequired,
};



const store = createStore(reducer, App)


class App extends Component {
    constructor(){
        super();
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
            /*Instead of manually coding our API requests, we’re going to use a library, which was created by José M. Pérez, a Spotify engineer, that abstracts pretty much every API call we could need.*/
            spotifyApi.setAccessToken(token);
        }
        this.state = {
            firebaseUser:{},
            loggedIn: token ? true : false,
            nowPlaying: {name: '', albumArt: ''},
            currentuser: {id: '', name: '',},
            //additions
            cities: {cities: []},
            songsearchbar: {}
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
    /*Write a function called getNowPlaying inside of the App Class to make the API request. This function will use the one of the many spotify Api methods to make a request and creates a promise. We then use the response data to set state. The code below is already structured access the right data in the response, but I highly suggest you experiment by looking at the entire response object, either by logging it to the console or by checking the network tab in your dev tools*/
    getNowPlaying(){
        spotifyApi.getMyCurrentPlaybackState()
            .then((response) => {
                this.setState({
                    nowPlaying: {
                        name: response.item.name,
                        albumArt: response.item.album.images[0].url
                    }
                });
            });
        this.storeUserNameAndId();
    }

    storeUserNameAndId() {
        spotifyApi.getMe()
            .then((response) => {
                this.setState({
                    currentuser: {
                        id: response.id,
                        name: response.display_name
                    }
                });
            });
    }

    createJsonPlaylistParameter() {
        const plJSON = {
            "name": prompt('Enter Playlist Name:')
        }
        var MyJSON = JSON.stringify(plJSON);
        alert(plJSON);
        return MyJSON;
    }
    componentDidMount(){
        this.storeUserNameAndId();
        this.authListener();
    }

    getTopArtists(){
        spotifyApi.getMyTopTracks()
    }

    authListener(){
        fire.auth().onAuthStateChanged((firebaseUser) => {
            //console.log(firebaseUser);
            if(firebaseUser){
                this.setState({firebaseUser});
                localStorage.setItem('firebaseUser', firebaseUser.uid);
            }else {
                this.setState({firebaseUser: null});
                //localStorage.removeItem('firebaseUser');
            }
        });
    }


    render() {
        return (
            <Fragment>

                <CssBaseline />
                {/*<GoogleLogin onSuccess={} onFailure={} clientId={}/>*/}
                <Header
                    username={this.state.currentuser.name}
                />
                    <Button
                        onClick={() =>
                        this.getNowPlaying() &&
                        this.storeUserNameAndId()
                        }>
                    </Button>


                <div>
                    {this.state.loggedIn ?
                        (<Button target="_blank" href='http://www.btnf.basementtrolls.com'>Logout from
                            Spotify</Button>)
                        : (<Button target="_blank" href={spotifyLoginUrl}>Login with
                            Spotify</Button>)
                    }
                </div>

                <Button onClick={() =>
                    this.getNowPlaying() &&
                    this.storeUserNameAndId()
                    }>
                    <Typography>
                        <div>
                            <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
                        </div>
                        <p>Now Playing: { this.state.nowPlaying.name }</p>
                        <p>Current User: { this.state.currentuser.name}</p>
                        <p>User ID: { this.state.currentuser.id}</p>

                    </Typography>
                </Button>
                    <Button
                        onClick={() =>
                            this.getNowPlaying()}>
                        Check Now Playing
                    </Button>
                <Form1/>
                <FormSearchBar/>
                <PinnedSubheaderList classes={"hey", "you", 1, 3}/>
                <FirebaseDrawer firebaseUser={this.state.firebaseUser}/>
            </Fragment>
    )
    }
}

export default App;
