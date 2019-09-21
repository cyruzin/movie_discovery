import React from 'react'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Button from 'antd/lib/button'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import 'antd/lib/button/style/css'

const DiscoveryPagination = props => {
    return (
        <div>
            <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                    {props.data.prevPage ?
                        <Button
                            onClick={props.prevPage}
                            type='primary'
                            icon='arrow-left'
                            shape='circle'
                            style={{ fontSize: 20, marginRight: 20 }}
                            theme="outlined" />
                        :
                        null
                    }
                    {props.data.nextPage && props.data.totalPages > 1 ?
                        <Button
                            onClick={props.nextPage}
                            type='primary'
                            icon='arrow-right'
                            shape='circle'
                            style={{ fontSize: 20 }}
                            theme="outlined" />
                        :
                        null
                    }
                </Col>
            </Row>
        </div>
    )
}

export default DiscoveryPagination