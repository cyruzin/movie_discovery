import axios from 'axios'
import type from '../types/DiscoveryTypes'
import { apiKey } from '../../util/constants'

export const fetch = payload => {
    const {
        page, sortBy, year, genres, castValue,
        keywordsValue, loaded, hasErrors
    } = payload
    const genresList = genres.join(',')
    const castList = castValue.map(cast => cast.key).join(',')
    const keywordsList = keywordsValue.map(keyword => keyword.key).join(',')

    return async (dispatch) => {
        try {
            if (loaded) dispatch({ type: type.LOADED, loaded: false })
            if (hasErrors) dispatch({ type: type.ERRORS, errors: '', hasErrors: false })

            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&with_genres=${genresList}&with_cast=${castList}&with_keywords=${keywordsList}&primary_release_year=${year}&page=${page}`)

            dispatch({
                type: type.FETCH,
                page: response.data.page,
                totalPages: response.data.total_pages,
                totalResults: response.data.total_results,
                results: response.data.results
            })

            dispatch({ type: type.LOADED, loaded: true })
        } catch (error) {
            dispatch({ type: type.ERRORS, errors: error, hasErrors: true })
        }
    }
}

export const fetchCast = payload => {
    return async (dispatch) => {
        try {
            dispatch({ type: type.LOADED_CAST, loadedCast: true })

            const response = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(payload)}&page=1&include_adult=false`)

            const cast = response.data.results.map(cast => ({
                text: cast.name,
                value: cast.id,
            }))

            dispatch({ type: type.CAST, cast: cast })
            dispatch({ type: type.LOADED_CAST, loadedCast: false })
        } catch (error) {
            dispatch({ type: type.ERRORS, errors: error, hasErrors: true })
        }
    }
}

export const fetchKeywords = payload => {
    return async (dispatch) => {
        try {
            dispatch({ type: type.LOADED_KEYWORDS, loadedKeywords: true })

            const response = await axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${encodeURIComponent(payload)}&page=1`)

            const keywords = response.data.results.map(keyword => ({
                text: keyword.name,
                value: keyword.id,
            }))

            dispatch({ type: type.KEYWORDS, keywords: keywords })
            dispatch({ type: type.LOADED_KEYWORDS, loadedKeywords: false })
        } catch (error) {
            dispatch({ type: type.ERRORS, errors: error, hasErrors: true })
        }
    }
}

export const loaded = value => ({
    type: type.LOADED, loaded: value
})

export const year = value => ({
    type: type.YEAR, year: value
})

export const sortBy = value => ({
    type: type.SORT_BY, sortBy: value
})

export const genres = value => ({
    type: type.GENRES, genres: value
})

export const cast = value => ({
    type: type.CAST_VALUE,
    castValue: value, cast: []
})

export const keywords = value => ({
    type: type.KEYWORDS_VALUE,
    keywordsValue: value, keywords: []
})

export const page = value => ({
    type: type.PAGE, page: value
})

export const nextPage = (value = false) => ({
    type: type.NEXT_PAGE, nextPage: value
})

export const prevPage = (value = false) => ({
    type: type.PREV_PAGE, prevPage: value
})

export const lastPage = value => ({
    type: type.LAST_PAGE, lastPage: value
})