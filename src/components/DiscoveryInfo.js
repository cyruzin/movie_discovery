import React from 'react'
import { Row, Col } from 'antd'
import { getYear } from '../util/helpers'

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

        <Row>
            <Col span={24}>
                {props.results.map(m => (
                    <h3 key={m.id}>
                        {m.title} {getYear(m.release_date)}
                    </h3>
                ))}
            </Col>
        </Row>
    </div>
)

export default DiscoveryInfo