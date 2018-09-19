import React from 'react'
import { Row, Col } from 'antd'
import { getYear } from '../util/helpers'

const DiscoveryInfo = props => (
    <div>
        {props.results.map(m => (
            <Row>
                <Col span={24}>
                    <h3 key={m.id}>{m.title} ({getYear(m.release_date)})</h3>
                </Col>
            </Row>
        ))}
    </div>
)

export default DiscoveryInfo