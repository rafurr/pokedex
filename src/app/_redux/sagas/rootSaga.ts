/* eslint-disable generator-star-spacing */
import { all, fork } from 'redux-saga/effects'
import pokemonSaga from './pokemonSaga'
import pokedexSaga from './pokedexSaga'

export function* rootSaga() {
  yield all([fork(pokemonSaga)])
  yield all([fork(pokedexSaga)])
}
