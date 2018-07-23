// @flow
import React from 'react'
import { compose } from 'redux'
import {FlatList} from 'react-native'
//HOC
import venueData from '../Hoc/venueData'

//Components
import {ListItem}  from './index'
import type {venuesNormalised} from "../Types";
//type
type Props = {
  venues: venuesNormalised,
  navigation:Object
}
const venueList = ({ venues, navigation }: Props) => {
    const keyExtractor = item => item

    const renderListItem = item => {
        return <ListItem item={item} navigation={navigation} />
    }

    const renderItems = (items : venuesNormalised) => {
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
