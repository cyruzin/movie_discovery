import { combineReducers } from 'redux'
import DiscoveryReducer from '../components/Discovery/reducers/DiscoveryReducer'
import MovieReducer from '../components/Movie/reducers/MovieReducer'

const reducers = combineReducers({
    discovery: DiscoveryReducer,
    movie: MovieReducer
})

export default reducers
