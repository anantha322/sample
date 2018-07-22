// @flow
import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './Styles/EmptyPageStyle'
//type
type Props = {
  pageDetail: string
}
export default ({ pageDetail = 'Detail screen' }: Props) => {
    return (
        <View style={styles.container}>
            <Text>{pageDetail}</Text>
        </View>
    )
}
