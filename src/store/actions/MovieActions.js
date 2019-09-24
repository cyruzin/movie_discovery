import axios from 'axios'
import type from '../types/MovieTypes'
import { apiKey } from '../../util/constants'

export const fetchMovie = ({ id, loaded }) => {
    return async (dispatch) => {
        try {
            if (loaded) dispatch({ type: type.LOADED_MOVIE, loaded: false })

            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`)

            dispatch({ type: type.FETCH_MOVIE, payload: response.data })
            dispatch({ type: type.LOADED_MOVIE, loaded: true })
        } catch (error) {
            dispatch({ type: type.ERRORS_MOVIE, hasErrors: true, errors: error })
        }
    }
}

export const fetchCredits = id => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)

            dispatch({ type: type.FETCH_CREDITS, cast: response.data.cast })
        } catch (error) {
            dispatch({ type: type.ERRORS_MOVIE, hasErrors: true, errors: error })
        }
    }
}