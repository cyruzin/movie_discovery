import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../store/actions/MovieActions'
import MovieInfo from './MovieInfo'

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
                {this.props.data.loaded ?
                    <MovieInfo data={this.props.data} />
                    :
                    null
                }
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