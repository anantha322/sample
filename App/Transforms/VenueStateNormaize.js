// @flow

import type { VenueFromList } from '../types'
export const venuesStateNormalize = (venues: Array<VenueFromList>) => {
    let byId = {}
    venues.forEach(venue => {
        byId[venue.id] = venue
    })
    return {
        byId,
        allIds: Object.keys(byId)
    }
}
