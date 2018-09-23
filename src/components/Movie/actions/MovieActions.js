import axios from 'axios'
import types from '../types/MovieTypes'
import { apiKey } from '../../../util/constants'

export const fetchMovie = ({ id, loaded }) => {
    return dispatch => {

        if (loaded) {
            dispatch({ type: types.LOADED_MOVIE, loaded: false })
        }

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`)
            .then(res => {
                dispatch({ type: types.FETCH_MOVIE, payload: res.data })
                dispatch({ type: types.LOADED_MOVIE, loaded: true })
            })
            .catch(err => {
                dispatch({ type: types.ERRORS_MOVIE, hasErrors: true, errors: err })
            })
    }

}

export const fetchCredits = id => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
            .then(res => {
                dispatch({ type: types.FETCH_CREDITS, cast: res.data.cast })
            })
            .catch(err => {
                dispatch({ type: types.ERRORS_MOVIE, hasErrors: true, errors: err })
            })
    }
}