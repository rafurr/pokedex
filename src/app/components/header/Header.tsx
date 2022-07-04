/* eslint-disable multiline-ternary */
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../_redux/reducers/rootReducer'
import { padId, capitalizeFirst } from '../../../app/utils/common'
import './styles.scss'

export function Header() {
  const {
    pending: pokemonPending,
    error: pokemonError,
    pokemon
  } = useSelector((state: RootState) => {
    return state.pokemon
  })

  const id = pokemon?.id
  const idString = padId(id)

  return (
    <div>
      {!idString || pokemonPending ? (
        <div></div>
      ) : pokemonError ? (
        <div></div>
      ) : (
        <div className="header-container">
          <>
            <div>
              <span>{capitalizeFirst(pokemon?.name)}</span>{' '}
              <span>#{padId(pokemon?.id)}</span>
            </div>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idString}.png`}
            />
          </>
        </div>
      )}
    </div>
  )
}
