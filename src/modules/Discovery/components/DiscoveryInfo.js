import React from 'react'
import { Row, Col } from 'antd'
import { getYear, handleOverview } from '../../../util/helpers'
import { imgSize } from '../../../util/constants'

let movies

const DiscoveryInfo = props => (
    <div>
        <Row>
            {props.data.hasErrors ?
                <Col span={24}>
                    <h3>{props.data.errors}</h3>
                </Col>
                : null
            }
        </Row>

        <Row style={{ marginTop: 20 }} gutter={8}>
            {props.results.length > 0 ?
                movies = props.results.map(m => {
                    if (m.poster_path !== null) {
                        return (
                            <Col
                                key={m.id}
                                lg={12}
                                xs={24}
                                style={{ marginBottom: 20 }}>
                                <Row>
                                    <Col
                                        lg={10}>
                                        <img
                                            src={`${imgSize.w185}${m.poster_path}`}
                                            style={{ maxHeight: 240 }}
                                            alt={m.title} />
                                    </Col>
                                    <Col
                                        style={{ marginTop: 10 }}
                                        xs={24}
                                        lg={14}>
                                        <h3>{m.title}</h3>
                                        <p>
                                            {getYear(m.release_date)}
                                        </p>
                                        <p>{handleOverview(m.overview)}</p>
                                    </Col>
                                </Row>
                            </Col>
                        )
                    }
                    return movies
                })

                :
                <div>{'No Results'}</div>
            }
        </Row>
    </div >
)

export default DiscoveryInfo