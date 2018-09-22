import React from 'react'
import { getYear, handleOverview } from '../../../util/helpers'
import { imgSize } from '../../../util/constants'
import { Row, Col, Icon } from 'antd'

const MovieInfo = props => {

    const {
        poster_path, title, release_date, overview,
        runtime
    } = props.data

    const genres = props.data.genres.map(v => v.name).join(', ')

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
                        <Icon type="calendar" theme="outlined" /> {getYear(release_date)} | <Icon type="tag" theme="outlined" /> {genres} | <Icon type="clock-circle" theme="outlined" /> {runtime} minutes
    
                    </small>
                </p>
                <p>
                    {handleOverview(overview, 500)}
                </p>
            </Col>
        </Row>
    )
}

export default MovieInfo