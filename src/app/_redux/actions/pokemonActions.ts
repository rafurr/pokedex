import { pokemonTypes } from '../actionTypes/pokemonTypes'
import {
  FetchPokemonFailure,
  FetchPokemonFailurePayload,
  FetchPokemonRequest,
  FetchPokemonSuccess,
  FetchPokemonSuccessPayload,
  SetCurrentPokemonRequest
} from '../types/types'

export const setCurrentPokemonRequest = (
  payload: string
): SetCurrentPokemonRequest => ({
  type: pokemonTypes.SET_CURRENT_REQUEST,
  payload
})

export const fetchPokemonRequest = (payload: string): FetchPokemonRequest => ({
  type: pokemonTypes.FETCH_POKEMON_REQUEST,
  payload
})

export const fetchPokemonSuccess = (
  payload: FetchPokemonSuccessPayload
): FetchPokemonSuccess => ({
  type: pokemonTypes.FETCH_POKEMON_SUCCESS,
  payload
})

export const fetchPokemonFailure = (
  payload: FetchPokemonFailurePayload
): FetchPokemonFailure => ({
  type: pokemonTypes.FETCH_POKEMON_FAILURE,
  payload
})
