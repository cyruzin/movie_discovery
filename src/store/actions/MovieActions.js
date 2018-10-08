import axios from 'axios'
import type from '../types/MovieTypes'
import { apiKey } from '../../util/constants'

export const fetchMovie = ({ id, loaded }) => {
    return dispatch => {

        if (loaded) {
            dispatch({ type: type.LOADED_MOVIE, loaded: false })
        }

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`)
            .then(res => {
                dispatch({ type: type.FETCH_MOVIE, payload: res.data })
                dispatch({ type: type.LOADED_MOVIE, loaded: true })
            })
            .catch(err => {
                dispatch({ type: type.ERRORS_MOVIE, hasErrors: true, errors: err })
            })
    }

}

export const fetchCredits = id => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
            .then(res => {
                dispatch({ type: type.FETCH_CREDITS, cast: res.data.cast })
            })
            .catch(err => {
                dispatch({ type: type.ERRORS_MOVIE, hasErrors: true, errors: err })
            })
    }
}