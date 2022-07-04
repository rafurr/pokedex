/* eslint-disable dot-notation */
/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Autocomplete, TextField, Button } from '@mui/material'
import {
  fetchPokemonRequest,
  setCurrentPokemonRequest
} from './app/_redux/actions/pokemonActions'
import { RootState } from './app/_redux/reducers/rootReducer'
import { Header } from './app/components/header/Header'
import { Abilities } from './app/components/abilities/Abilities'
import { Moves } from './app/components/moves/Moves'
import { Types } from './app/components/types/Types'
import { Evolution } from './app/components/evolution/Evolution'
import { Sprites } from './app/components/sprites/Sprites'
import './App.scss'

function App() {
  const dispatch = useDispatch()
  const {
    current,
    history,
    pending: pokemonPending,
    error: pokemonError
  } = useSelector((state: RootState) => {
    return state.pokemon
  })

  useEffect(() => {
    dispatch(fetchPokemonRequest(current))
    setName(current)
  }, [current])

  const [name, setName] = useState(current)

  const handleChange = (event, value) => {
    dispatch(setCurrentPokemonRequest(value))
  }
  const handleInputChange = (event, value) => {
    setName(value)
  }

  const handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      handleClick()
    }
  }

  const handleClick = () => {
    dispatch(setCurrentPokemonRequest(name))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Autocomplete
            disablePortal
            id="Search List"
            value={current}
            inputValue={name}
            options={history}
            sx={{ width: 300 }}
            size="small"
            onChange={handleChange}
            onInputChange={handleInputChange}
            onKeyPress={handleKeyPress}
            renderInput={(params) => (
              <TextField
                {...params}
                label="name/i"
                onKeyPress={handleKeyPress}
              />
            )}
          />
          <Button variant="outlined" onClick={handleClick}>
            Search
          </Button>
        </div>
        <div>
          {pokemonPending ? (
            <div>Loading...</div>
          ) : pokemonError ? (
            <div>Cannot find the Pokemon you seek. Please try again.</div>
          ) : null}
        </div>
        <Header />
        <Types />
        <Moves />
        <Abilities />
        <Evolution />
        <Sprites />
      </header>
    </div>
  )
}

export default App
