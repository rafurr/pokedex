import { IPokemon } from '../../models/IPokemon'
import { pokemonTypes } from '../actionTypes/pokemonTypes'

import { IPokedex } from '../../models/IPokedex'
import { pokedexTypes } from '../actionTypes/pokedexTypes'

//
// Pokemon
//
export interface PokemonState {
  current: string
  history: string[]
  pending: boolean
  pokemon: IPokemon
  species: any
  evolution: any
  error: string | null
}

export interface FetchPokemonSuccessPayload {
  pokemon: IPokemon
  species: any
  evolution: any
}

export interface FetchPokemonFailurePayload {
  error: string
}

export interface SetCurrentPokemonRequest {
  type: typeof pokemonTypes.SET_CURRENT_REQUEST
  payload: string
}

export interface FetchPokemonRequest {
  type: typeof pokemonTypes.FETCH_POKEMON_REQUEST
  payload: string
}

export type FetchPokemonSuccess = {
  type: typeof pokemonTypes.FETCH_POKEMON_SUCCESS
  payload: FetchPokemonSuccessPayload
}

export type FetchPokemonFailure = {
  type: typeof pokemonTypes.FETCH_POKEMON_FAILURE
  payload: FetchPokemonFailurePayload
}

export type PokemonActions =
  | SetCurrentPokemonRequest
  | FetchPokemonRequest
  | FetchPokemonSuccess
  | FetchPokemonFailure

//
// Pokedex
//
export interface PokedexState {
  pending: boolean
  pokedex: IPokedex[]
  error: string | null
}

export interface FetchPokedexSuccessPayload {
  pokedex: IPokedex[]
}

export interface FetchPokedexFailurePayload {
  error: string
}

export interface FetchPokedexRequest {
  type: typeof pokedexTypes.FETCH_POKEDEX_REQUEST
}

export type FetchPokedexSuccess = {
  type: typeof pokedexTypes.FETCH_POKEDEX_SUCCESS
  payload: FetchPokedexSuccessPayload
}

export type FetchPokedexFailure = {
  type: typeof pokedexTypes.FETCH_POKEDEX_FAILURE
  payload: FetchPokedexFailurePayload
}

export type PokedexActions =
  | FetchPokedexRequest
  | FetchPokedexSuccess
  | FetchPokedexFailure
