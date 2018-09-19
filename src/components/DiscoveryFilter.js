import React from 'react'
import { Row, Col, Select, Spin, Button } from 'antd'

const Option = Select.Option;

const DiscoveryFilter = props => (
    <div>
        <Row gutter={16} style={{ margin: '20px 0px 20px 0px' }}>
            <Col span={4} >
                <Select
                    style={{ width: '100%' }}
                    placeholder="Select"
                    onChange={props.handleYearChange}
                    size="large"
                    allowClear
                >
                    {props.handleYears()}
                </Select>
            </Col>
            <Col span={6} >
                <Select
                    style={{ width: '100%' }}
                    placeholder="Select"
                    onChange={props.handleSortByChange}
                    size="large"
                    allowClear
                >
                    <Option value="popularity.desc">Popularity Descending</Option>
                    <Option value="popularity.asc">Popularity Ascending</Option>
                    <Option value="vote_average.desc">Rating Descending</Option>
                    <Option value="vote_average.asc">Rating Ascending</Option>
                    <Option value="primary_release_date.desc">Release Date Descending</Option>
                    <Option value="primary_release_date.asc">Release Date Ascending</Option>
                    <Option value="title.asc">Title (A-Z)</Option>
                    <Option value="title.desc">Title (Z-A)</Option>
                </Select>
            </Col>
            <Col span={6} >
                <Select
                    allowClear
                    mode="tags"
                    placeholder="Genres"
                    size="large"
                    style={{ width: '100%' }}
                    onChange={props.handleGenresChange}>
                    <Option value="28">Action</Option>
                    <Option value="12">Adventure</Option>
                    <Option value="16">Animation</Option>
                    <Option value="35">Comedy</Option>
                    <Option value="80">Crime</Option>
                    <Option value="99">Documentary</Option>
                    <Option value="18">Drama</Option>
                    <Option value="10751">Family</Option>
                    <Option value="14">Fantasy</Option>
                    <Option value="36">History</Option>
                    <Option value="27">Horror</Option>
                    <Option value="10402">Music</Option>
                    <Option value="9648">Mystery</Option>
                    <Option value="10749">Romance</Option>
                    <Option value="878">Science Fiction</Option>
                    <Option value="10770">TV Movie</Option>
                    <Option value="53">Thriller</Option>
                    <Option value="10752">War</Option>
                    <Option value="37">Western</Option>
                </Select>
            </Col>
            <Col span={6} >
                <Select
                    mode="multiple"
                    labelInValue
                    value={props.data.castValue}
                    size="large"
                    placeholder="Cast"
                    notFoundContent={props.data.loadedCast ? <Spin size="small" /> : null}
                    filterOption={false}
                    onSearch={props.fetchCast}
                    onChange={props.handleCastChange}
                    style={{ width: '100%' }}
                >
                    {props.data.cast.map(c =>
                        <Option key={c.value} value={c.value}>{c.text}</Option>)
                    }
                </Select>
            </Col>
        </Row>
        <Row gutter={16} style={{ margin: '20px 0px 20px 0px' }}>
            <Col span={6}>
                <Select
                    mode="multiple"
                    labelInValue
                    value={props.data.keywordsValue}
                    size="large"
                    placeholder="Keywords"
                    notFoundContent={props.data.loadedKeywords ? <Spin size="small" /> : null}
                    filterOption={false}
                    onSearch={props.fetchKeywords}
                    onChange={props.handleKeywordsChange}
                    style={{ width: '100%' }}
                >
                    {props.data.keywords.map(k =>
                        <Option key={k.value} value={k.value}>{k.text}</Option>)
                    }
                </Select>
            </Col>
            <Col span={4}>
                <Button
                    type="primary"
                    size="large"
                    icon="search"
                    onClick={props.fetch}>
                    Search
                        </Button>
            </Col>
        </Row>
    </div>
)

export default DiscoveryFilter