// @flow
import React, {Component} from 'react'

import type {Venue} from '../Types'

const navigateListItem = (screenName: string) => WrappedComponent => {
    class NavigateListItem extends Component  {
        onPressListItem = (item : Venue )=> {
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
