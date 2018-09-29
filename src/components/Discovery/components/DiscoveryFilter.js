import React from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Select from 'antd/lib/select'
import Spin from 'antd/lib/spin'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import 'antd/lib/select/style/css'
import 'antd/lib/spin/style/css'

const Option = Select.Option;

const handleYears = (range = 1900) => {
    let time = new Date();
    let years = [];

    for (let i = time.getFullYear(); i >= range; i--) {
        years.push(i);
    }

    return years.map((v, i) => {
        return <Option key={i} value={v}>{v}</Option>
    })
}

const DiscoveryFilter = props => (
    <div>
        <Row gutter={16} style={{ margin: '20px 0px 20px 0px' }}>
            <Col lg={3} xs={24}>
                <span><small>Year</small></span>
                <Select
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Select"
                    onChange={props.handleYearChange}
                    size="large"
                    defaultValue={props.data.year}
                >
                    {handleYears()}
                </Select>
            </Col>
            <Col lg={6} xs={24}>
                <span><small>Sort By</small></span>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Select"
                    onChange={props.handleSortByChange}
                    size="large"
                    defaultValue={props.data.sortBy}
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
            <Col lg={7} xs={24}>
                <span><small>Genres</small></span>
                <Select
                    allowClear
                    value={props.data.genres}
                    mode="tags"
                    placeholder="Select Genres"
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
            <Col lg={8} xs={24}>
                <span><small>Cast</small></span>
                <Select
                    allowClear
                    mode="multiple"
                    labelInValue
                    value={props.data.castValue}
                    size="large"
                    placeholder="Ex: Tom Cruise"
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
            <Col lg={6} xs={24}>
                <span><small>Keywords</small></span>
                <Select
                    allowClear
                    mode="multiple"
                    labelInValue
                    value={props.data.keywordsValue}
                    size="large"
                    placeholder="Ex: war"
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
        </Row>
    </div>
)

export default DiscoveryFilter