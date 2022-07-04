import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'
import pokedexReducer from './pokedexReducer'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokedex: pokedexReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
