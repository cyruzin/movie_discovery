import type from '../types/MovieTypes'

const initialState = {
    loaded: false,
    results: [],
    cast: [],
    hasErrors: false,
    errors: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH_MOVIE:
            return {
                ...state,
                results: action.payload
            }
        case type.LOADED_MOVIE:
            return {
                ...state,
                loaded: action.loaded
            }
        case type.FETCH_CREDITS:
            return {
                ...state,
                cast: action.cast
            }
        case type.ERRORS_MOVIE:
            return {
                ...state,
                hasErrors: action.hasErrors,
                errors: action.errors
            }
        default:
            return state
    }
}