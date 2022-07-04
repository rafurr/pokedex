/* eslint-disable multiline-ternary */
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../_redux/reducers/rootReducer'
import { replaceAndCapitalizeAll } from '../../../app/utils/common'
import './styles.scss'

export function Moves() {
  const {
    pending: pokemonPending,
    error: pokemonError,
    pokemon
  } = useSelector((state: RootState) => {
    return state.pokemon
  })

  return (
    <div>
      {pokemonPending ? (
        <div></div>
      ) : pokemonError ? (
        <div></div>
      ) : (
        <>
          <div>Moves</div>{' '}
          <div className="moves-container">
            {pokemon?.moves.slice(0, 5).map((move) => (
              <div key={move.move.name}>
                {replaceAndCapitalizeAll(move.move.name, '-', ' ')}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
