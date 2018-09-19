import { combineReducers } from 'redux'
import DiscoveryReducer from './DiscoveryReducer'

export default combineReducers({
    discovery: DiscoveryReducer
})