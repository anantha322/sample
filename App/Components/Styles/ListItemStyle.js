import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
    title: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    detailContainer: {
        flexDirection: 'row'
    },
    distance: {
        flex: 1
    },
    ratingContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    cardContainer: {
        height: 250
    }
})
