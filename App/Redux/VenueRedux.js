// @flow
import { createActions, createReducer } from 'reduxsauce'

import { venuesStateNormalize } from '../Transforms'
import type { VenueFromList } from '../Types'

const { Types, Creators } = createActions({
    getAllVenues: null,
    saveVenues: ['venues'],
    getReviews: ['venueId'],
    getVenue: ['venueId']
})

export const VenueTypes = Types
export default Creators

type State = {
    venues: {
        allIds: Array<string>,
        byId: Object
    }
}

export const INITIAL_STATE: State = {
    venues: {
        allIds: [],
        byId: {}
    }
}

export const saveVenues = (state: State, { venues }: { venues: Array<VenueFromList> }) => ({
    ...state,
    venues: venuesStateNormalize(venues)
})

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_ALL_VENUES]: null,
    [Types.SAVE_VENUES]: saveVenues,
    [Types.GET_REVIEWS]: null,
    [Types.GET_VENUE]: null
})
