import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const immutable = Immutable

const { Types, Creators } = createActions({ startup: null })

export const StartupTypes = Types
export default Creators

type State = {
    +active: boolean
}

export const INITIAL_STATE: State = immutable({ active: false })

export const startup = state =>
    ({
        ...state,
        active: true
    }: State)

export const reducer = createReducer(INITIAL_STATE, { [Types.STARTUP]: startup })
