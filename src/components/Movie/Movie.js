import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../../store/actions/MovieActions'

import MovieInfo from './MovieInfo'

class Movie extends PureComponent {
    componentDidMount () {
        const { loaded } = this.props.data
        const { id } = this.props.match.params
        const payload = { loaded, id }
        const { fetchMovie, fetchCredits } = this.props.actions

        fetchMovie(payload)
        fetchCredits(id)
    }

    render () {
        const { data } = this.props

        return (
            <>
                {data.loaded && <MovieInfo data={data} />}
            </>
        )
    }
}

const mapStateToProps = state => ({
    data: state.movie
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie)