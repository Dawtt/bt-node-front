import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Hello from '../components/Hello'
import Counter from '../components/Counter'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'
import AppSpotify from '../components/AppSpotify'
import SpotifyLoginPage from '../components/SpotifyLoginPage'

const routes = (
  <div>
    <NavBar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hello" component={Hello} />
        <Route path="/counter" component={Counter} />
        <Route path="/spotifyStart" component={AppSpotify} />
        <Route path="/spotify-redux-example" component={SpotifyLoginPage} />



        <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
