// Pokemon
import React, { Component } from 'react';
import * as actionCreators from './../../../../store/actions'
import { Grid, Image } from 'react-bootstrap'
import fetch from 'isomorphic-fetch';
import './style.css'
import Img from './../../../elements/Img'

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    }
  }


  handlePokemonClick(id) {
    console.log('pokemonClick')
    actionCreators.updateCurrentPokemonId(id)

  }

  componentDidMount() {
    let url = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({
          pokemon: json,
        })
      })
  }

  render () {
    const { pokemon } = this.state
    if (pokemon === null) {
      return null;
    }
    // console.log(pokemon.species.name) // works
    return (
      <div className='pokemon-card'>
        <p className='pokemon-name'>{pokemon.species.name}</p>
        <Img
          src={this.props.image}
          alt='picture of pokemen'
          onClick={this.handlePokemonClick(this.props.id)}/>

      </div>
    )
  }

}

export default Pokemon;
