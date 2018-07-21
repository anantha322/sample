import { put } from 'redux-saga/effects'
import VenueActions from '../Redux/VenueRedux'
import { NativeModules } from 'react-native'
const { RNCoffeeService } = NativeModules

export function* getAllVenues() {
    try {
        const responseData = yield RNCoffeeService.getData('venue-search')
        const venueData = typeof responseData === 'string' ? JSON.parse(responseData) : responseData
        yield put(VenueActions.saveVenues(venueData.businesses))
    } catch (e) {
        // TODO: error handling goes here
    }
}
