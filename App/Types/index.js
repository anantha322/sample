// @flow

type WorkingDay = {
    is_overnight: Boolean,
    start: string,
    day: number,
    end: string
}

type Hour = {
    open: Array<WorkingDay>,
    is_open_now: Boolean,
    hours_type: string
}

type VenueCategory = {
    title: string,
    alias: string
}

type Location = {
    zip_code: string,
    state: string,
    city: string,
    address3: string,
    display_address: Array<string>,
    cross_streets: string,
    address1: string,
    address2: string,
    country: string
}

type Coordinates = {
    longitude: number,
    latitude: number
}

type BaseVenue = {
    categories: Array<VenueCategory>,
    coordinates: Coordinates,
    display_phone: string,
    id: string,
    image_url: string,
    is_closed: Boolean,
    location: Location,
    name: string,
    phone: string,
    price: string,
    rating: number,
    review_count: number,
    transactions: Array<any>,
    url: string
}

type DetailedVenue = {
    hours: Hour,
    is_claimed: Boolean,
    photos: Array<string>
}

export type Venue = BaseVenue & DetailedVenue

type ListVenue = {
    distance: number
}

export type VenueFromList = BaseVenue & ListVenue
