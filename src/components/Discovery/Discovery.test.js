import reducer from '../../store/reducers/DiscoveryReducer'
import types from '../../store/types/DiscoveryTypes'
import * as actions from '../../store/actions/DiscoveryActions'

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

//reducer test
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

//actions tests
describe('discovery actions', () => {
    it('should create an action to change loaded value', () => {
        const value = true
        const expectedAction = {
            type: types.LOADED,
            loaded: value,
        }
        expect(actions.loaded(value)).toEqual(expectedAction)
    })

    it('should create an action to change the year value', () => {
        const value = 2017
        const expectedAction = {
            type: types.YEAR,
            year: value
        }
        expect(actions.year(value)).toEqual(expectedAction)
    })

    it('should create an action to change the sort by value', () => {
        const value = 'popularity.asc'
        const expectedAction = {
            type: types.SORT_BY,
            sortBy: value
        }
        expect(actions.sortBy(value)).toEqual(expectedAction)
    })

    it('should create an action to change the genres value', () => {
        const value = [1, 2, 3]
        const expectedAction = {
            type: types.GENRES,
            genres: value
        }
        expect(actions.genres(value)).toEqual(expectedAction)
    })

    it('should create an action to change the cast value', () => {
        const value = true
        const expectedAction = {
            type: types.CAST_VALUE,
            castValue: value,
            cast: []
        }
        expect(actions.cast(value)).toEqual(expectedAction)
    })

    it('should create an action to change the keywords value', () => {
        const value = true
        const expectedAction = {
            type: types.KEYWORDS_VALUE,
            keywordsValue: value,
            keywords: []
        }
        expect(actions.keywords(value)).toEqual(expectedAction)
    })

    it('should create an action to change the page value', () => {
        const value = 2
        const expectedAction = {
            type: types.PAGE,
            page: value
        }
        expect(actions.page(value)).toEqual(expectedAction)
    })

    it('should create an action to change the next page value', () => {
        const value = false
        const expectedAction = {
            type: types.NEXT_PAGE,
            nextPage: value
        }
        expect(actions.nextPage(value)).toEqual(expectedAction)
    })

    it('should create an action to change the previous page value', () => {
        const value = true
        const expectedAction = {
            type: types.PREV_PAGE,
            prevPage: value
        }
        expect(actions.prevPage(value)).toEqual(expectedAction)
    })

    it('should create an action to change the last page value', () => {
        const value = true
        const expectedAction = {
            type: types.LAST_PAGE,
            lastPage: value
        }
        expect(actions.lastPage(value)).toEqual(expectedAction)
    })
})