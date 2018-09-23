import React from 'react'
import { getYear, handleOverview } from '../../../util/helpers'
import { imgSize } from '../../../util/constants'
import { Row, Col, Icon } from 'antd'
import MovieCast from './MovieCast'


const MovieInfo = props => {

    const {
        poster_path, title, release_date, overview,
        runtime, genres, videos
    } = props.data.results

    const genresList = genres.map(v => v.name).join(', ')

    return (
        <Row>
            <Col lg={8} xs={24}>
                <img src={`${imgSize.w300}${poster_path}`}
                    alt={title} />
            </Col>
            <Col lg={16} xs={24}>
                <h1>
                    {title}
                </h1>
                <p>
                    <small>
                        <span style={{ marginRight: 5 }}>
                            <Icon type="calendar" theme="outlined" /> {getYear(release_date)}
                        </span>
                        <span style={{ marginRight: 5 }}>
                            | <Icon type="tag" theme="outlined" /> {genresList}
                        </span>
                        <span style={{ marginRight: 5 }}>
                            | <Icon type="clock-circle" theme="outlined" /> {runtime} minutes
                        </span>
                        {videos.results[0].key !== "" ?
                            <span style={{ marginRight: 5 }}>
                                | <Icon type="play-circle" theme="outlined" />
                                <a href={`https://www.youtube.com/watch?v=${videos.results[0].key}`} target="_blank"> Watch Trailer</a>
                            </span>
                            : null
                        }
                    </small>
                </p>
                <p>
                    {handleOverview(overview, 700)}
                </p>

            </Col>
            <h4>Top Billed Cast</h4>
            {<MovieCast cast={props.data.cast} />}
        </Row >
    )
}

export default MovieInfo