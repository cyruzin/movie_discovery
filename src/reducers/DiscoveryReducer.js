import type from '../types/DiscoveryTypes'

const initialState = {
    loaded: false,
    year: '',
    sortBy: 'popularity.desc',
    page: 1,
    nextPage: false,
    prevPage: false,
    lastPage: false,
    totalPages: '',
    totalResults: '',
    loadedKeywords: false,
    keywords: [],
    keywordsValue: [],
    loadedCast: false,
    cast: [],
    castValue: [],
    genres: [],
    results: [],
    hasErrors: false,
    errors: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH:
            return {
                ...state,
                page: action.page,
                totalPages: action.totalPages,
                totalResults: action.totalResults,
                results: action.results
            }
        case type.LOADED:
            return {
                ...state,
                loaded: action.loaded
            }
        case type.YEAR:
            return {
                ...state,
                year: action.year
            }
        case type.SORT_BY:
            return {
                ...state,
                sortBy: action.sortBy
            }
        case type.GENRES:
            return {
                ...state,
                genres: action.genres
            }
        case type.CAST:
            return {
                ...state,
                cast: action.cast
            }
        case type.CAST_VALUE:
            return {
                ...state,
                castValue: action.castValue,
                cast: action.cast
            }
        case type.LOADED_CAST:
            return {
                ...state,
                loadedCast: action.loadedCast
            }
        case type.KEYWORDS:
            return {
                ...state,
                keywords: action.keywords
            }
        case type.KEYWORDS_VALUE:
            return {
                ...state,
                keywordsValue: action.keywordsValue,
                keywords: action.keywords
            }
        case type.LOADED_KEYWORDS:
            return {
                ...state,
                loadedKeywords: action.loadedKeywords
            }
        case type.ERRORS:
            return {
                ...state,
                errors: action.errors,
                hasErrors: action.hasErrors
            }
        default:
            return state
    }
}