import { pokedexTypes } from '../actionTypes/pokedexTypes'
import {
  FetchPokedexFailure,
  FetchPokedexFailurePayload,
  FetchPokedexRequest,
  FetchPokedexSuccess,
  FetchPokedexSuccessPayload
} from '../types/types'

export const fetchPokedexRequest = (): FetchPokedexRequest => ({
  type: pokedexTypes.FETCH_POKEDEX_REQUEST
})

export const fetchPokedexSuccess = (
  payload: FetchPokedexSuccessPayload
): FetchPokedexSuccess => ({
  type: pokedexTypes.FETCH_POKEDEX_SUCCESS,
  payload
})

export const fetchPokedexFailure = (
  payload: FetchPokedexFailurePayload
): FetchPokedexFailure => ({
  type: pokedexTypes.FETCH_POKEDEX_FAILURE,
  payload
})
