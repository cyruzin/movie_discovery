import { combineReducers } from 'redux'
import DiscoveryReducer from './DiscoveryReducer'
import MovieReducer from './MovieReducer'

const reducers = combineReducers({
    discovery: DiscoveryReducer,
    movie: MovieReducer
})

export default reducers
