// @flow

// Define all your types here
export type Hour = {
  open: Array<WorkingDay>,
  is_open_now: Boolean,
  hours_type: string
}
export type CategoryItem = {
  title: string,
  alias: string
}
export type WorkingDay = {
    is_overnight: Boolean,
    start: string,
    day: number,
    end: string
}
export type Location = {
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
export type Coordinates = {
    longitude: number,
    latitude: number
}
export type VenueDetail = {
  hours: Hour,
  is_claimed: Boolean,
  photos: Array<string>
}
export type BaseVenue = {
    categories: Array<CategoryItem>,
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
export type ListVenue = {
    distance: number
}
export type Venue = {...BaseVenue,...VenueDetail}
export type VenueList = {...BaseVenue, ...ListVenue}

