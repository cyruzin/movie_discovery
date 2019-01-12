import reducer from '../../store/reducers/MovieReducer'
import types from '../../store/types/MovieTypes'

const initialState = {
    loaded: false,
    results: [],
    cast: [],
    hasErrors: false,
    errors: ''
}

//reducer tests
describe('Movie Reducer', () => {
    it('Should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('Should fill results array with a payload request', () => {
        expect(reducer(initialState, {
            type: types.FETCH_MOVIE,
            payload: [
                {
                    "id": 348350,
                    "imdb_id": "tt3778644",
                    "original_language": "en",
                    "original_title": "Solo: A Star Wars Story",
                }
            ]
        })).toEqual({
            loaded: false,
            results: [
                {
                    "id": 348350,
                    "imdb_id": "tt3778644",
                    "original_language": "en",
                    "original_title": "Solo: A Star Wars Story",
                }
            ],
            cast: [],
            hasErrors: false,
            errors: ''
        })
    })
})