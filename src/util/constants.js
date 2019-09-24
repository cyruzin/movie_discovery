const apiKey = process.env.REACT_APP_TMDB_API_KEY

const imgUrl = process.env.REACT_APP_TMDB_IMG_URL

const imgSize = {
    w45: `${imgUrl}w45/`,
    w92: `${imgUrl}w92/`,
    w154: `${imgUrl}w154/`,
    w185: `${imgUrl}w185/`,
    w276_and_h350_face: `${imgUrl}w276_and_h350_face`,
    w300: `${imgUrl}w300/`,
    w500: `${imgUrl}w500/`,
    w780: `${imgUrl}w780/`,
    h632: `${imgUrl}h632/`,
    original: `${imgUrl}original/`
}

export { apiKey, imgSize }