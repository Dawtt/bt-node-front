import { combineReducers } from 'redux'
import counterReducer from './counter'
import spotifyReducer from './spotify'

const rootReducer = combineReducers({
  count: counterReducer,
  spotify: spotifyReducer,
})

export default rootReducer



