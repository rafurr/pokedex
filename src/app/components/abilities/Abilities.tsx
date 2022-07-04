/* eslint-disable multiline-ternary */
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../_redux/reducers/rootReducer'
import { replaceAndCapitalizeAll } from '../../../app/utils/common'
import './styles.scss'

export function Abilities() {
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
          <div>Abilities</div>
          <div className="abilities-container">
            {pokemon?.abilities.map((item) => (
              <div key={item.ability.name}>
                {replaceAndCapitalizeAll(item.ability.name, '-', ' ')}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
