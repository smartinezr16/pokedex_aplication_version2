// src/App.js
import React, { Suspense, lazy } from 'react';
import PokemonProvider from './context/PokemonContext';
import SearchBar from './components/SearchBar';

// Cargar PokemonList de forma dinámica
const PokemonList = lazy(() => import('./components/PokemonList'));

const App = () => {
  return (
    <PokemonProvider>
      <div className="App">
        <SearchBar />
        {/* Suspense se utiliza para mostrar un mensaje de carga mientras se obtiene PokemonList */}
        <Suspense fallback={<div>Cargando lista de Pokémon...</div>}>
          <PokemonList />
        </Suspense>
      </div>
    </PokemonProvider>
  );
};

export default App;


