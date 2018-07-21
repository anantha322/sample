import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReduxPersist from '../Config/ReduxPersist'
import StartupActions from '../Redux/StartupRedux'

const root = () => WrappedComponent => {
    class Root extends Component {
        componentDidMount() {
            // if redux persist is not active fire startup action
            if (!ReduxPersist.active) {
                this.props.startup()
            }
        }
        render() {
            return <WrappedComponent {...this.state} {...this.props} />
        }
    }

    const mapDispatchToProps = dispatch => ({
        startup: () => dispatch(StartupActions.startup())
    })

    return connect(
        null,
        mapDispatchToProps
    )(Root)
}

export default root
