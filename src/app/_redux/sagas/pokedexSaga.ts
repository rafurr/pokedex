/* eslint-disable generator-star-spacing */
import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { IPokedex } from '../../models/IPokedex'
import {
  fetchPokedexFailure,
  fetchPokedexSuccess
} from '../actions/pokedexActions'
import { pokedexTypes } from '../actionTypes/pokedexTypes'

const getPokedex = () =>
  axios.get<IPokedex[]>('https://pokeapi.co/api/v2/pokemon?limit=1200')

function* fetchPokedexSaga() {
  try {
    const pokedex = yield call(getPokedex)

    yield put(
      fetchPokedexSuccess({
        pokedex: pokedex.data.results
      })
    )
  } catch (e) {
    yield put(
      fetchPokedexFailure({
        error: e.message
      })
    )
  }
}

function* pokedexSaga() {
  yield all([takeLatest(pokedexTypes.FETCH_POKEDEX_REQUEST, fetchPokedexSaga)])
}

export default pokedexSaga
