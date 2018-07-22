import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import VenueDetailScreen from '../Containers/VenueDetailScreen'

import styles from './Styles/NavigationStyles'
import { Colors } from '../Themes'

// Manifest of possible screens
const PrimaryNav = StackNavigator(
    {
        LaunchScreen: {
            screen: LaunchScreen,
            navigationOptions: () => ({ title: 'Coffee Shops' })
        },
        VenueDetailScreen: {
            screen: VenueDetailScreen,
            navigationOptions: ({ navigation }) => {
                return { title: navigation.state.params.title }
            }
        }
    },
    {
        // Default config for all screens
        // headerMode: 'none',
        initialRouteName: 'LaunchScreen',
        navigationOptions: {
            headerStyle: styles.header,
            headerTintColor: Colors.snow
        }
    }
)

export default PrimaryNav
