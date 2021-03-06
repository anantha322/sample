import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.

const ApplicationStyles = {
    screen: {
        mainContainer: {
            flex: 1,
            backgroundColor: Colors.transparent
        },
        container: {
            flex: 1,
            paddingTop: Metrics.baseMargin,
            backgroundColor: Colors.transparent
        }
    }
}

export default ApplicationStyles
