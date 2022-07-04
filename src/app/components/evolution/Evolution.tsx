/* eslint-disable multiline-ternary */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { setCurrentPokemonRequest } from '../../../app/_redux/actions/pokemonActions'
import { RootState } from '../../_redux/reducers/rootReducer'
import { replaceAndCapitalizeAll } from '../../../app/utils/common'
import './styles.scss'

export function Evolution() {
  const dispatch = useDispatch()
  const {
    pending: pokemonPending,
    error: pokemonError,
    evolution
  } = useSelector((state: RootState) => {
    return state.pokemon
  })

  const handleClick = (name) => {
    dispatch(setCurrentPokemonRequest(name))
  }

  const evolution1 = evolution?.chain.species
  const evolution2 = evolution?.chain.evolves_to[0].species
  const evolution3 = evolution?.chain.evolves_to[0].evolves_to[0].species

  return (
    <div>
      {pokemonPending ? (
        <div></div>
      ) : pokemonError ? (
        <div></div>
      ) : (
        <>
          <div>{'Evolution'}</div>
          <div className="evolution-container">
            <Button onClick={() => handleClick(evolution1?.name)}>
              {replaceAndCapitalizeAll(evolution1?.name, '-', ' ')}
            </Button>
            {' > '}
            <Button onClick={() => handleClick(evolution2?.name)}>
              {replaceAndCapitalizeAll(evolution2?.name, '-', ' ')}
            </Button>
            {' > '}
            <Button onClick={() => handleClick(evolution3?.name)}>
              {replaceAndCapitalizeAll(evolution3?.name, '-', ' ')}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
