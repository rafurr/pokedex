import { pokemonTypes } from '../actionTypes/pokemonTypes'
import { PokemonActions, PokemonState } from '../types/types'

const initialState: PokemonState = {
  current: 'pikachu',
  history: ['pikachu', 'nidorino'],
  pending: false,
  pokemon: null,
  species: null,
  evolution: null,
  error: null
}

const updateHistory = (history, current) => {
  return history.includes(current) ? history : [...history, current]
}

export default (state = initialState, action: PokemonActions) => {
  switch (action.type) {
    case pokemonTypes.SET_CURRENT_REQUEST:
      return {
        ...state,
        current: action.payload,
        history: updateHistory(state.history, action.payload)
      }
    case pokemonTypes.FETCH_POKEMON_REQUEST:
      return {
        ...state,
        pending: true
      }
    case pokemonTypes.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pending: false,
        pokemon: action.payload.pokemon,
        species: action.payload.species,
        evolution: action.payload.evolution,
        error: null
      }
    case pokemonTypes.FETCH_POKEMON_FAILURE:
      return {
        ...state,
        pending: false,
        pokemon: null,
        species: null,
        evolution: null,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
