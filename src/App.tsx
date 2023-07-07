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


  render() {

    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
