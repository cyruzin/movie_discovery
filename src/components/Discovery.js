import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as DiscoveryActions from '../actions/DiscoveryActions'
import { Row, Col, Select, Spin, Button } from 'antd'
import debounce from 'lodash/debounce';
import { getYear } from '../util/helpers'

const Option = Select.Option;

class Discovery extends Component {

    constructor(props) {
        super(props)
        this.fetchCast = debounce(this.fetchCast, 800);
        this.fetchKeywords = debounce(this.fetchKeywords, 800);
    }

    componentDidMount() {
        this.fetch()
    }

    fetch = () => this.props.fetch(this.props.data)

    fetchCast = value => this.props.fetchCast(value)

    fetchKeywords = value => this.props.fetchKeywords(value)

    handleKeywordsChange = value => this.props.keywords(value)

    handleCastChange = value => this.props.cast(value)

    handleSortByChange = value => this.props.sortBy(value)

    handleYearChange = value => this.props.year(value)

    handleGenresChange = value => this.props.genres(value)

    handleYears = (range = 1900) => {
        let time = new Date();
        let years = [];

        for (let i = time.getFullYear(); i >= range; i--) {
            years.push(i);
        }

        return years.map((v, i) => {
            return <Option key={i} value={v}>{v}</Option>
        })
    };

    render() {
        const children = [];

        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }

        return (
            <div>
                <Row gutter={16} style={{ margin: '20px 0px 20px 0px' }}>
                    <Col span={4} >
                        <Select
                            style={{ width: '100%' }}
                            placeholder="Select"
                            onChange={this.handleYearChange}
                            size="large"
                            allowClear
                        >
                            {this.handleYears()}
                        </Select>
                    </Col>
                    <Col span={6} >
                        <Select
                            style={{ width: '100%' }}
                            placeholder="Select"
                            onChange={this.handleSortByChange}
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
                            onChange={this.handleGenresChange}>
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
                            value={this.props.data.castValue}
                            size="large"
                            placeholder="Cast"
                            notFoundContent={this.props.data.loadedCast ? <Spin size="small" /> : null}
                            filterOption={false}
                            onSearch={this.fetchCast}
                            onChange={this.handleCastChange}
                            style={{ width: '100%' }}
                        >
                            {this.props.data.cast.map(c =>
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
                            value={this.props.data.keywordsValue}
                            size="large"
                            placeholder="Keywords"
                            notFoundContent={this.props.data.loadedKeywords ? <Spin size="small" /> : null}
                            filterOption={false}
                            onSearch={this.fetchKeywords}
                            onChange={this.handleKeywordsChange}
                            style={{ width: '100%' }}
                        >
                            {this.props.data.keywords.map(k =>
                                <Option key={k.value} value={k.value}>{k.text}</Option>)
                            }
                        </Select>
                    </Col>
                    <Col span={4}>
                        <Button
                            type="primary"
                            size="large"
                            icon="search"
                            onClick={this.fetch}>
                            Search
                        </Button>
                    </Col>
                </Row>
                {this.props.data.loaded ?
                    <Row>
                        <Col span={24}>
                            {this.props.data.results.map(m => (
                                <h3 key={m.id}>{m.title} ({getYear(m.release_date)})</h3>
                            ))
                            }
                        </Col>
                    </Row>
                    : null
                }
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.discovery
    }
}

export default connect(mapStateToProps, DiscoveryActions)(Discovery)