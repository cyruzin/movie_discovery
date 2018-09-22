import types from '../types/MovieTypes'

const initialState = {
    loaded: false,
    results: [],
    hasErrors: false,
    errors: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_MOVIE:
            return {
                ...state,
                results: action.payload
            }
        case types.LOADED_MOVIE:
            return {
                ...state,
                loaded: action.loaded
            }
        case types.ERRORS_MOVIE:
            return {
                ...state,
                hasErrors: action.hasErrors,
                errors: action.errors
            }
        default:
            return state
    }
}