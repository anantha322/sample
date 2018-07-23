// @flow

import type { VenueList } from '../Types'
export const venuesStateNormalize = (venues: Array<VenueList>) => {
    let byId = {}
    venues.forEach(venue => {
        byId[venue.id] = venue
    })
    return {
        byId,
        allIds: (Object.keys(byId): Array<string>)
    }
}
