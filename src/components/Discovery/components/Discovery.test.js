import reducer from '../reducers/DiscoveryReducer'
import types from '../types/DiscoveryTypes'

const initialState = {
    loaded: false,
    year: (new Date()).getFullYear(),
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

describe('Discovery Reducer', () => {
    it('Should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('Should fill results array with a payload request', () => {
        expect(reducer(initialState,
            {
                type: types.FETCH,
                page: 1,
                totalPages: 222,
                totalResults: 2000,
                results: [
                    {
                        "vote_count": 2116,
                        "id": 363088,
                    },
                    {
                        "vote_count": 4201,
                        "id": 121001,
                    }
                ]
            })).toEqual({
                loaded: false,
                year: (new Date()).getFullYear(),
                sortBy: 'popularity.desc',
                page: 1,
                nextPage: false,
                prevPage: false,
                lastPage: false,
                totalPages: 222,
                totalResults: 2000,
                loadedKeywords: false,
                keywords: [],
                keywordsValue: [],
                loadedCast: false,
                cast: [],
                castValue: [],
                genres: [],
                results: [
                    {
                        "vote_count": 2116,
                        "id": 363088,
                    },
                    {
                        "vote_count": 4201,
                        "id": 121001,
                    }
                ],
                hasErrors: false,
                errors: ''
            })
    })
})