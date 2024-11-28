// src/components/PokemonCard.js
import React from 'react';

const PokemonCard = ({ pokemon }) => (
  <div className="card">
    <div className="overlap-group">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
    <div className="frame">
      <span className="number">#{pokemon.id}</span>
    </div>
    <div className="overlap">
      <div className="div">
        <div className="frame-2">
          <span className="name">{pokemon.name}</span>
        </div>
        <div className="types-wrapper">
          {pokemon.types.map((type) => (
            <span key={type.type.name} className="types">
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="classification">Pokémon Type</div>
      <div className="frame-3">
        <div className="frame-4">
          <div className="chip">
            <span className="text-wrapper">HP:</span>
            <span className="text-wrapper-2">{pokemon.stats[0].base_stat}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PokemonCard;


