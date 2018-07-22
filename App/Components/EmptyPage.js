import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/EmptyPageStyle'
export default ({ pageDetail = 'Detail screen' }) => {
    return (
        <View style={styles.container}>
            <Text>{pageDetail}</Text>
        </View>
    )
}
