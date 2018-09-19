import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select } from 'antd'
import * as DiscoveryActions from '../actions/DiscoveryActions'
import debounce from 'lodash/debounce';
import DiscoveryInfo from './DiscoveryInfo'
import DiscoveryFilter from './DiscoveryFilter';

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
    }

    render() {

        return (
            <div>
                <DiscoveryFilter
                    fetch={this.fetch}
                    fetchCast={this.fetchCast}
                    fetchKeywords={this.fetchKeywords}
                    handleYears={this.handleYears}
                    handleYearChange={this.handleYearChange}
                    handleCastChange={this.handleCastChange}
                    handleGenresChange={this.handleGenresChange}
                    handleKeywordsChange={this.handleKeywordsChange}
                    handleSortByChange={this.handleSortByChange}
                    data={this.props.data}
                />
                {this.props.data.loaded ?
                    <DiscoveryInfo results={this.props.data.results} /> : null
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