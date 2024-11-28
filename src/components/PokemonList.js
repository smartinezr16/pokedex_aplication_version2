// src/components/PokemonList.js
import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const { state } = useContext(PokemonContext);
  const { pokemons, loading, searchTerm } = state;

  if (loading) return <div>Cargando...</div>;

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pokemon-list">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;


