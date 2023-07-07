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

    handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { updatePokemons } = this.props;
        const { name, level } = this.state;
        if(name && level) {
            updatePokemons(name, level);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleForm} className='pokemon-form'>
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
