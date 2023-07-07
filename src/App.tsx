import { Component } from "react";

export interface Pokemon {
  name: string,
  level: number
}

class App extends Component {

  state: { pokemons: Pokemon[] } = {
    pokemons: []
  };

  componentDidMount(): void {
    this.setState({
      pokemons: [
        {
          name: 'Pikachu',
          level: 10,
        },
        {
          name: 'Balbasaur',
          level: 12
        }
      ]
    })
  }

  deletePokemon = (index: number) => {
    const newPokemons = this.state.pokemons.filter((pokemon, i) => i !== index);
    this.setState({ pokemons: newPokemons });
  }

  render() {
    const pokemons = this.state.pokemons;

    return (
      <div className="App pokemon-container">
        <h1 className="pokemon-header">Pokemon List</h1>
        <ul className="ul-pokemons">
          {pokemons.map((pokemon, index) => (
            <li className="pokemon-list" key={index}>
              {pokemon.name}
              <span onClick={() => this.deletePokemon(index)}>Delete</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
