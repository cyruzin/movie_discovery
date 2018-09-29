import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/MovieActions'
import MovieInfo from './MovieInfo'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Movie extends Component {

    componentDidMount = () => {
        const { loaded } = this.props.data
        const { id } = this.props.match.params
        const payload = { loaded, id }

        this.props.actions.fetchMovie(payload)
        this.props.actions.fetchCredits(id)
    }

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="transition"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>

                    {this.props.data.loaded ?
                        <MovieInfo key={this.props.match.params.id}
                            data={this.props.data} />
                        :
                        null
                    }

                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.movie
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Movie)