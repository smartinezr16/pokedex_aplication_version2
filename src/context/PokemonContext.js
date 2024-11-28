// src/context/PokemonContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import pokemonReducer from '../reducers/pokemonReducer';

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const initialState = {
    pokemons: [],
    loading: true,
    searchTerm: '',
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  // Función para obtener pokémon y despachar acciones
  const fetchPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
      const data = await response.json();
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          return await pokemonResponse.json();
        })
      );
      dispatch({ type: 'SET_POKEMONS', payload: pokemonData });
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;

