// @flow

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { compose } from 'redux'

import { Card, Rating, Text } from 'react-native-elements'
import { convertMeterToKm } from '../Lib/Helper'
import navigateListItem from '../Hoc/navigateListItem'

import styles from './Styles/ListItemStyle'
import { Images } from '../Themes'
import type {VenueList} from '../Types'
type Props = {
  item: VenueList,
  onPressListItem: any
}

const listItem = ({ item , onPressListItem }:Props) => {
    const getTitle = () => {
        return (
            <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.title}>
                {item.name}
            </Text>
        )
    }

    const getDistance = () => (
        <Text style={styles.distance}>{convertMeterToKm(item.distance)} Km</Text>
    )

    const getRating = () => {
        return (
            <View style={styles.ratingContainer}>
                <Rating imageSize={20} readonly startingValue={item.rating} />
                <Text>({item.review_count})</Text>
            </View>
        )
    }

    const getDetails = () => {
        return (
            <View style={styles.detailContainer}>
                {getDistance()}
                {getRating()}
            </View>
        )
    }
    return (
        <TouchableOpacity onPress={() => onPressListItem(item)}>
            <Card
                imageProps={{ defaultSource: Images.defaultImage }}
                imageStyle={styles.cardContainer}
                image={{ uri: item.image_url }}
            >
                {getTitle()}
                {getDetails()}
            </Card>
        </TouchableOpacity>
    )
}

export default compose(navigateListItem('VenueDetailScreen'))(listItem)
