import { pokedexTypes } from '../actionTypes/pokedexTypes'
import { PokedexActions, PokedexState } from '../types/types'

const initialState: PokedexState = {
  pending: false,
  pokedex: [],
  error: null
}

export default (state = initialState, action: PokedexActions) => {
  switch (action.type) {
    case pokedexTypes.FETCH_POKEDEX_REQUEST:
      return {
        ...state,
        pending: true
      }
    case pokedexTypes.FETCH_POKEDEX_SUCCESS:
      return {
        ...state,
        pending: false,
        pokedex: action.payload.pokedex,
        error: null
      }
    case pokedexTypes.FETCH_POKEDEX_FAILURE:
      return {
        ...state,
        pending: false,
        pokedex: [],
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
