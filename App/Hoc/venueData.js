import React, { Component  } from 'react'
import { connect } from 'react-redux'
import VenueActions from '../Redux/VenueRedux'

const venueData = () => WrappedComponent => {
    class VenueData extends Component {
        state = { venues: null }
        dataDownloaded = false
        componentDidMount() {
            if (!this.dataDownloaded && this.props.startup.active) {
                this.props.getAllVenues()
            }
        }
        componentDidUpdate(prevProps) {
            if (this.props.startup.active !== prevProps.startup.active) {
                this.props.getAllVenues()
            }

            if (this.props.venues !== prevProps.venues) {
                this.setState({ venues: this.props.venues })
                this.dataDownloaded = true
            }
        }
        render() {
            return <WrappedComponent {...this.state} {...this.props} />
        }
    }

    const mapStateToProps = state => ({
        startup: state.startup,
        venues: state.venue.venues
    })

    const mapDispatchToProps = dispatch => ({
        getAllVenues: () => dispatch(VenueActions.getAllVenues())
    })

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(VenueData)
}

export default venueData
