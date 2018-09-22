import axios from 'axios'
import types from '../types/MovieTypes'
import { apiKey } from '../../../util/constants'

export const fetchMovie = ({ id, loaded }) => {
    return dispatch => {

        if (loaded) {
            dispatch({ type: types.LOADED_MOVIE, loaded: false })
        }

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => {
                dispatch({ type: types.FETCH_MOVIE, payload: res.data })
                dispatch({ type: types.LOADED_MOVIE, loaded: true })
            })
            .catch(err => {
                dispatch({ type: types.ERRORS_MOVIE, hasErrors: true, errors: err })
            })
    }

}