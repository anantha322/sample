import React from 'react'
import { View, StatusBar } from 'react-native'
import { compose } from 'redux'

import Navigation from '../Navigation/AppNavigation'
import root from '../Hoc/root'
// Styles
import styles from './Styles/RootContainerStyles'

// class RootContainer extends Component {
//
//     render() {
//         return (
//             <View style={styles.applicationView}>
//                 <StatusBar barStyle="light-content" />
//                 <Navigation />
//             </View>
//         )
//     }
// }
//class RootContainer extends Component {
const RootContainer = () => {
    return (
        <View style={styles.applicationView}>
            <StatusBar barStyle="light-content" />
            <Navigation />
        </View>
    )
}

export default compose(root())(RootContainer)
