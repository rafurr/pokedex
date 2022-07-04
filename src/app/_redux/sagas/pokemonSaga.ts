/* eslint-disable generator-star-spacing */
import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { IPokemon } from '../../models/IPokemon'
import {
  fetchPokemonFailure,
  fetchPokemonSuccess
} from '../actions/pokemonActions'
import { pokemonTypes } from '../actionTypes/pokemonTypes'

const getPokemon = (name) =>
  axios.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)

const getPokemonSpecies = (id) =>
  axios.get<any>(`https://pokeapi.co/api/v2/pokemon-species/${id}`)

const getEvolutionChain = (url) => axios.get<any>(url)

function* fetchPokemonSaga(action) {
  try {
    const pokemon = yield call(getPokemon, action.payload)
    const pokemonSpecies = yield call(getPokemonSpecies, pokemon.data.id)
    const url = pokemonSpecies?.data.evolution_chain.url
    const evolutionChain = yield call(getEvolutionChain, url)
    yield put(
      fetchPokemonSuccess({
        pokemon: pokemon.data,
        species: pokemonSpecies.data,
        evolution: evolutionChain.data
      })
    )
  } catch (e) {
    yield put(
      fetchPokemonFailure({
        error: e.message
      })
    )
  }
}

function* pokemonSaga() {
  yield all([takeLatest(pokemonTypes.FETCH_POKEMON_REQUEST, fetchPokemonSaga)])
}

export default pokemonSaga
