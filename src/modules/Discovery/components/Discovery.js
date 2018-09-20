import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import * as Actions from '../actions/DiscoveryActions'
import debounce from 'lodash/debounce'
import DiscoveryInfo from './DiscoveryInfo'
import DiscoveryFilter from './DiscoveryFilter'

class Discovery extends Component {

    constructor(props) {
        super(props)
        this.fetch = debounce(this.fetch, 800)
        this.fetchCast = debounce(this.fetchCast, 800);
        this.fetchKeywords = debounce(this.fetchKeywords, 800);
    }

    componentDidMount = () => this.fetch()

    fetch = () => this.props.actions.fetch(this.props.data)

    fetchCast = value => this.props.actions.fetchCast(value)

    fetchKeywords = value => this.props.actions.fetchKeywords(value)

    handleKeywordsChange = value => {
        this.props.actions.keywords(value)
        this.fetch()
    }

    handleCastChange = value => {
        this.props.actions.cast(value)
        this.fetch()
    }

    handleSortByChange = value => {
        this.props.actions.sortBy(value)
        this.fetch()
    }

    handleYearChange = value => {
        this.props.actions.year(value)
        this.fetch()
    }

    handleGenresChange = value => {
        this.props.actions.genres(value)
        this.fetch()
    }


    render() {
        return (
            <div>
                <DiscoveryFilter
                    fetch={this.fetch}
                    fetchCast={this.fetchCast}
                    fetchKeywords={this.fetchKeywords}
                    handleYearChange={this.handleYearChange}
                    handleCastChange={this.handleCastChange}
                    handleGenresChange={this.handleGenresChange}
                    handleKeywordsChange={this.handleKeywordsChange}
                    handleSortByChange={this.handleSortByChange}
                    data={this.props.data}
                />
                {this.props.data.loaded ?
                    <DiscoveryInfo
                        results={this.props.data.results}
                        data={this.props.data} />
                    : <Icon type="loading" style={{ fontSize: '30px', color: '#40a9ff', margin: '20px 100px 10px 500px' }} />
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

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Discovery)