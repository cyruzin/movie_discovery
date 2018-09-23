import React from 'react'
import { getYear, handleOverview } from '../../../util/helpers'
import { imgSize } from '../../../util/constants'
import { Row, Col, Icon } from 'antd'


const MovieInfo = props => {

    const {
        poster_path, title, release_date, overview,
        runtime, genres
    } = props.data.results

    const genresList = genres.map(v => v.name).join(', ')

    const renderCast = cast => {
        let c = cast
            .filter(c => c.name !== '' && c.profile_path !== '')
            .slice(0, 5).map(v => (
                <Col key={v.id} lg={3} xs={12}>
                    <img
                        src={`${imgSize.w92}${v.profile_path}`}
                        alt={v.name} />
                    <p><small>{v.name}</small> <br /> <small>{v.character}</small></p>
                </Col>
            ))
        return c
    }

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
                        <Icon type="calendar" theme="outlined" /> {getYear(release_date)} | <Icon type="tag" theme="outlined" /> {genresList} | <Icon type="clock-circle" theme="outlined" /> {runtime} minutes

                    </small>
                </p>
                <p>
                    {handleOverview(overview, 700)}
                </p>

            </Col>
            <h4>Top Billed Cast</h4>
            {renderCast(props.data.cast)}

        </Row >
    )
}

export default MovieInfo