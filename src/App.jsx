/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */

import { useState, useEffect } from 'react';
import data from './data.json';

export const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(data.pokemons);
  }, []);

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <h2>{pokemon.name}</h2>
            <p>Id: {pokemon.id}</p>
            <p>Height: {pokemon.height} m</p>
            <p>Weight: {pokemon.weight} kg</p>
            <p>Type: {pokemon.types.join(', ')}</p>
            <p>Weaknesses: {pokemon.weeknesses.join(', ')}</p>
            <p>Category: {pokemon.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};