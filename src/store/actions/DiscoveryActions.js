import axios from 'axios'
import type from '../types/DiscoveryTypes'
import { apiKey } from '../../util/constants'

export const fetch = payload => {
    const {
        page, sortBy, year, genres,
        castValue, keywordsValue, loaded, hasErrors
    } = payload
    const g = genres.join(',')
    const c = castValue.map(cast => cast.key).join(',')
    const k = keywordsValue.map(keyword => keyword.key).join(',')

    return dispatch => {

        if (loaded) {
            dispatch({ type: type.LOADED, loaded: false })
        }

        if (hasErrors) {
            dispatch({ type: type.ERRORS, errors: '', hasErrors: false })
        }

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&with_genres=${g}&with_cast=${c}&with_keywords=${k}&primary_release_year=${year}&page=${page}`)
            .then(res => {
                dispatch({
                    type: type.FETCH,
                    page: res.data.page,
                    totalPages: res.data.total_pages,
                    totalResults: res.data.total_results,
                    results: res.data.results
                })
                dispatch({ type: type.LOADED, loaded: true })
            })
            .catch(err => {
                dispatch({ type: type.ERRORS, errors: err, hasErrors: true })
            })
    }
}

export const fetchCast = payload => {
    const query = encodeURIComponent(payload)

    return dispatch => {
        dispatch({ type: type.LOADED_CAST, loadedCast: true })

        axios.get(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
            .then(res => {
                const cast = res.data.results.map(cast => ({
                    text: cast.name,
                    value: cast.id,
                }))
                dispatch({ type: type.CAST, cast: cast })
                dispatch({ type: type.LOADED_CAST, loadedCast: false })
            })
            .catch(err => {
                dispatch({ type: type.ERRORS, errors: err, hasErrors: true })
            })
    }
}

export const fetchKeywords = payload => {
    const query = encodeURIComponent(payload)

    return dispatch => {
        dispatch({ type: type.LOADED_KEYWORDS, loadedKeywords: true })

        axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${query}&page=1`)
            .then(res => {
                const keywords = res.data.results.map(keyword => ({
                    text: keyword.name,
                    value: keyword.id,
                }))
                dispatch({ type: type.KEYWORDS, keywords: keywords })
                dispatch({ type: type.LOADED_KEYWORDS, loadedKeywords: false })
            })
            .catch(err => {
                dispatch({ type: type.ERRORS, errors: err, hasErrors: true })
            })
    }
}

export const loaded = value => {
    return { type: type.LOADED, loaded: value }
}

export const year = value => {
    return { type: type.YEAR, year: value }
}

export const sortBy = value => {
    return { type: type.SORT_BY, sortBy: value }
}

export const genres = value => {
    return { type: type.GENRES, genres: value }
}

export const cast = value => {
    return { type: type.CAST_VALUE, castValue: value, cast: [] }
}

export const keywords = value => {
    return { type: type.KEYWORDS_VALUE, keywordsValue: value, keywords: [] }
}

export const page = value => {
    return { type: type.PAGE, page: value }
}

export const nextPage = (value = false) => {
    return { type: type.NEXT_PAGE, nextPage: value }
}

export const prevPage = (value = false) => {
    return { type: type.PREV_PAGE, prevPage: value }
}

export const lastPage = value => {
    return { type: type.LAST_PAGE, lastPage: value }
}