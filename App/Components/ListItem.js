// @flow

import React from 'react'
import { Image, Text, View } from 'react-native'
// import Rating from 'react-native-star-rating'
// import { Colors, Fonts } from '../themes'
import { Card, Button } from 'react-native-elements'
// import Style from './styles/CardStyle'
// import { stringWithTrailingDots } from '../helper/stringHelper'

// type Props = {
//   title: string,
//   rating: ?number,
//   imageUrl: string,
//   distance: ?number
// }

export default ({ item }) => {
    return (
        <Card
            title="HELLO WORLD"
            image={{ uri: 'https://s3-media2.fl.yelpcdn.com/bphoto/rEFJSvLhqaiZxWinLBeAyQ/o.jpg' }}
        >
            <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component structure than actual
                design.
            </Text>
            <Button
                icon={{ name: 'code' }}
                backgroundColor="#03A9F4"
                // fontFamily='Lato'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title="VIEW NOW"
            />
        </Card>
    )
}
