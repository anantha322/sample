// @flow
import React, { Component } from 'react'

const navigateListItem = (screenName: string) => WrappedComponent => {
    class NavigateListItem extends Component {
        onPressListItem = item => {
            const { navigation } = this.props.navigation
            navigation.navigate(screenName, { title: item.name, data: item })
        }
        render() {
            return (
                <WrappedComponent
                    onPressListItem={this.onPressListItem}
                    {...this.state}
                    {...this.props}
                />
            )
        }
    }
    return NavigateListItem
}
export default navigateListItem
