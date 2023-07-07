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
            <form className='pokemon-form'>
                <div>
                    <input
                        onChange={(e) => this.setState({ name: e.target.value })}
                        type="text"
                        name="Name"
                        className='name' />
                </div>
                <div>
                    <input
                        onChange={(e) => this.setState({ level: e.target.value })}
                        type="number"
                        name="Level"
                        className='level' />
                </div>
                <button className='pokemon-submit'>Add Pokemon</button>
            </form>
        )
    }
}
