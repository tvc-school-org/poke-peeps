// Page
import React from 'react';
import { connect } from 'react-redux';
import './style.css'
import Pokemons from './Pokemons'
import PokemonDetail from './PokemonDetail'

// import * as ku from '../../lib/ke-utils'

const Page = () => {


  return (
    <div className='page-wrapper'>

      <header>
        <h1 className='green-text site-title'>Pokemon Information App</h1>
        <h2 className='section-sub-title header-text'>Click on a pokemon</h2>
      </header>
      <div className='content-wrapper'>
        <div className='pokemon-page'>
          <Pokemons />
        </div>
        <div className='pokemon-detail'>
          <PokemonDetail />
        </div>
      </div>


    </div>
  )
}

export default Page
