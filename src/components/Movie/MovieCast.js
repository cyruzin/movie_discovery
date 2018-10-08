import React from 'react'
import Col from 'antd/lib/col'
import 'antd/lib/col/style/css'

import { imgSize } from '../../util/constants'

const MovieCast = props => {
    let cast = props.cast.filter(c => c.name !== '' && c.profile_path !== null)
        .slice(0, 5).map(v => (
            <Col key={v.id} lg={3} xs={12} >
                <img
                    src={`${imgSize.w92}${v.profile_path}`}
                    alt={v.name}
                    style={{ minHeight: 150 }} />
                <p style={{ marginTop: 10 }}>
                    {v.name} <br /> <small>{v.character}</small>
                </p>
            </Col>
        ))

    return cast
}

export default MovieCast