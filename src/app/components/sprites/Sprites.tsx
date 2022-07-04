/* eslint-disable multiline-ternary */
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../_redux/reducers/rootReducer'
import { replaceAndCapitalizeAll } from '../../../app/utils/common'
import './styles.scss'

export function Sprites() {
  const {
    pending: pokemonPending,
    error: pokemonError,
    pokemon
  } = useSelector((state: RootState) => {
    return state.pokemon
  })

  let sprites = []
  if (pokemon) {
    const entries = Object.entries(pokemon?.sprites)
    sprites = entries.reduce((acc, entry) => {
      if (typeof entry[1] === 'string') {
        acc.push(entry)
      }
      return acc
    }, [])
  }
  return (
    <>
      <div>Sprites</div>{' '}
      <div>
        {pokemonPending ? (
          <div></div>
        ) : pokemonError ? (
          <div></div>
        ) : (
          <div className="sprites-container">
            {sprites.map((sprite) => (
              <span className="sprite" key={sprite[0]}>
                <img src={sprite[1]} alt={sprite[0]} />
                <div>{replaceAndCapitalizeAll(sprite[0], '_', ' ')}</div>
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
