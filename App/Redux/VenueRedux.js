// @flow
import { createActions, createReducer } from 'reduxsauce'

import { venuesStateNormalize } from '../Transforms'
import type {VenueList, venuesNormalised} from '../Types'

const { Types, Creators } = createActions({
    getAllVenues: null,
    saveVenues: ['venues'],
    getReviews: ['venueId'],
    getVenue: ['venueId']
})

export const VenueTypes = Types
export default Creators

type State = {
    venues:venuesNormalised
}

export const INITIAL_STATE: State = {
    venues: {
        allIds: [],
        byId: {}
    }
}

export const saveVenues = (state: State, { venues }: { venues: Array<VenueList> }) => ({
    ...state,
    venues: venuesStateNormalize(venues)
})

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_ALL_VENUES]: null,
    [Types.SAVE_VENUES]: saveVenues,
    [Types.GET_REVIEWS]: null,
    [Types.GET_VENUE]: null
})
