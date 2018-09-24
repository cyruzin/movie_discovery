import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import * as Actions from '../actions/DiscoveryActions'
import debounce from 'lodash/debounce'
import DiscoveryInfo from './DiscoveryInfo'
import DiscoveryFilter from './DiscoveryFilter'
import DiscoveryPagination from './DiscoveryPagination'

class Discovery extends Component {

    constructor(props) {
        super(props)
        this.fetch = debounce(this.fetch, 800)
        this.fetchCast = debounce(this.fetchCast, 800);
        this.fetchKeywords = debounce(this.fetchKeywords, 800);
        this.shouldMountNext = debounce(this.shouldMountNext, 800);
        this.shouldRenderNext = debounce(this.shouldRenderNext, 800);
        this.shouldRenderPrev = debounce(this.shouldRenderPrev, 800);
        this.isPageOne = debounce(this.isPageOne, 800);
        this.isLastPage = debounce(this.isLastPage, 800);
    }

    componentDidMount = () => this.props.data.results.length === 0 ? this.fetch() : null

    fetch = () => {
        this.props.actions.fetch(this.props.data)
        this.shouldMountNext()
    }

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

    handleNextPage = () => {
        this.props.actions.loaded(false)
        this.props.actions.page(this.props.data.page + 1)

        this.fetch()
        this.isLastPage()
        this.shouldRenderPrev()

        window.scrollTo(0, 0)
    }

    handlePrevPage = () => {
        this.props.actions.loaded(false)
        this.props.actions.page(this.props.data.page - 1)

        this.fetch()
        this.shouldRenderNext()
        this.isPageOne()

        window.scrollTo(0, 0);
    }

    shouldMountNext = () => {
        if (this.props.data.lastPage !== true && this.props.data.results.length > 0) {
            this.props.actions.nextPage(true)
        }
    }

    shouldRenderNext = () => {
        if (this.props.data.page !== this.props.data.totalPages) {
            this.props.actions.lastPage(false)
            this.props.actions.nextPage(true)
        }
    }

    shouldRenderPrev = () => {
        if (this.props.data.page > 1) {
            this.props.actions.prevPage(true)
        }
    }

    isPageOne = () => {
        if (this.props.data.page === 1) {
            this.props.actions.prevPage(false)
            this.props.actions.nextPage(true)
        }
    }

    isLastPage = () => {
        if (this.props.data.page === this.props.data.totalPages) {
            this.props.actions.lastPage(true)
            this.props.actions.nextPage(false)
        }
    }


    render() {

        return (
            <div>
                <h2>Discovery</h2>
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
                    <div>
                        <DiscoveryInfo
                            results={this.props.data.results}
                            data={this.props.data} />
                        <DiscoveryPagination
                            data={this.props.data}
                            nextPage={this.handleNextPage}
                            prevPage={this.handlePrevPage} />
                    </div>
                    :
                    <Icon type="loading"
                        style={{
                            fontSize: '30px',
                            color: '#40a9ff',
                            margin: '20px 100px 10px 500px'
                        }} />
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