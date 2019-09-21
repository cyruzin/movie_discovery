import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Icon from 'antd/lib/icon'
import 'antd/lib/icon/style/css'

import debounce from 'lodash/debounce'

import * as Actions from '../../store/actions/DiscoveryActions'

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
        this.filterChanged = debounce(this.filterChanged, 800);
    }

    componentDidMount = () => this.props.data.results.length === 0 ? this.fetch() : null

    //initial fetch 
    fetch = () => {
        this.props.actions.fetch(this.props.data)
        this.shouldMountNext()
    }

    //fetch for cast
    fetchCast = value => this.props.actions.fetchCast(value)

    //fetch for keywords
    fetchKeywords = value => this.props.actions.fetchKeywords(value)

    //handler for keywords change
    handleKeywordsChange = value => {
        this.filterChanged()
        this.props.actions.keywords(value)
        this.fetch()
    }

    //handler for cast change
    handleCastChange = value => {
        this.filterChanged()
        this.props.actions.cast(value)
        this.fetch()
    }

    //handler for sort by change
    handleSortByChange = value => {
        this.filterChanged()
        this.props.actions.sortBy(value)
        this.fetch()
    }

    //handler for year change
    handleYearChange = value => {
        this.filterChanged()
        this.props.actions.year(value)
        this.fetch()
    }

    //handler for genres change
    handleGenresChange = value => {
        this.filterChanged()
        this.props.actions.genres(value)
        this.fetch()
    }

    //handler for next button logic
    handleNextPage = () => {
        this.props.actions.loaded(false)
        this.props.actions.page(this.props.data.page + 1)

        this.isLastPage()
        this.shouldRenderPrev()
        this.fetch()

        window.scrollTo(0, 0)
    }

    //handler for previous button logic
    handlePrevPage = () => {
        this.props.actions.loaded(false)
        this.props.actions.page(this.props.data.page - 1)

        this.shouldRenderNext()
        this.isPageOne()
        this.fetch()

        window.scrollTo(0, 0);
    }

    //check if necessary mount button next
    shouldMountNext = () => {
        if (this.props.data.lastPage !== true && this.props.data.results.length > 0) {
            this.props.actions.nextPage(true)
        }
    }

    //check if is necessary render button next
    shouldRenderNext = () => {
        if (this.props.data.page !== this.props.data.totalPages) {
            this.props.actions.lastPage(false)
            this.props.actions.nextPage(true)
        }
    }

    //check if button previous should render
    shouldRenderPrev = () => {
        if (this.props.data.page > 1) {
            this.props.actions.prevPage(true)
        }
    }

    //check if is page one
    isPageOne = () => {
        if (this.props.data.page === 1) {
            this.props.actions.prevPage(false)
            this.props.actions.nextPage(true)
        }
    }

    //check if reach last page
    isLastPage = () => {
        if (this.props.data.page === this.props.data.totalPages) {
            this.props.actions.lastPage(true)
            this.props.actions.nextPage(false)
        }
    }

    //checks when filter change
    filterChanged = () => {
        this.props.actions.page(1)
        this.isPageOne()
        this.isLastPage()
        this.shouldRenderNext()
        this.shouldRenderPrev()
    }


    render () {
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
                            data={this.props.data}
                        />

                        <DiscoveryPagination
                            data={this.props.data}
                            nextPage={this.handleNextPage}
                            prevPage={this.handlePrevPage}
                        />
                    </div>
                    :
                    <Icon
                        type="loading"
                        style={{
                            fontSize: '30px',
                            color: '#40a9ff',
                            margin: '20px 100px 10px 500px'
                        }}
                    />
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