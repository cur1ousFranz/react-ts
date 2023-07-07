import React, { Component } from 'react'
import { Pokemon } from '../App';

interface FormProps {
    updatePokemons: (name: string, level: number) => void
}

export default class PokemonForm extends Component<FormProps> {

    state: Pokemon = {
        name: '',
        level: 0,
    }

    render() {
        return (
           <div>

           </div>
        )
    }
}
