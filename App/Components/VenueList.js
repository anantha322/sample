import React from 'react'
import { compose } from 'redux'
import { FlatList, Text } from 'react-native'
//HOC
import venueData from '../Hoc/venueData'

//Components
import ListItem from './ListItem'
//styles
// import styles from './Styles/TwitterTrendsListStyles'

const venueList = ({ venues }) => {
    const keyExtractor = item => item
    const renderListItem = item => {
        return <ListItem item={item} />
    }
    const renderItems = items => {
        return (
            <FlatList
                style={{ flex: 1 }}
                data={items.allIds}
                renderItem={({ item }) => renderListItem(items.byId[item])}
                keyExtractor={keyExtractor}
            />
        )
    }
    if (venues.allIds.length > 0) {
        return renderItems(venues)
    }

    return null
}

export default compose(venueData())(venueList)
