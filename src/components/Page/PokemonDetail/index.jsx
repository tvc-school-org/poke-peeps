import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './../../../store/actions'
import * as selectors from './../../../store/selectors'
import './style.css'


const PokemonDetail = ({ currentPokemonId }) => {
  console.log(currentPokemonId)
  return (
    <div className='pokemon-detail'>
      <p>Detail about the pokemon</p>
    </div>

  )

}

const mapStateToProps = (state) => {
  const o = {
    currentPokemonId: selectors.getCurrentPokemonId(state)
  }
  return o
}
export default PokemonDetail
