// SearchBar.js
import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import './SearchBar.css'; // Asegúrate de importar el archivo CSS

const SearchBar = () => {
  const { dispatch } = useContext(PokemonContext);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    dispatch({ type: 'SEARCH_POKEMON', payload: value });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar Pokémon"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;

