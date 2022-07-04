/* eslint-disable multiline-ternary */
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../_redux/reducers/rootReducer'
import { replaceAndCapitalizeAll } from '../../../app/utils/common'
import './styles.scss'

export function Types() {
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
          <div>Types</div>{' '}
          <div className="types-container">
            {pokemon?.types.slice(0, 5).map((type) => (
              <div key={type.type.name}>
                {replaceAndCapitalizeAll(type.type.name, '-', ' ')}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
