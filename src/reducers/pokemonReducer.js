// src/reducers/pokemonReducer.js
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return { ...state, pokemons: action.payload, loading: false };
    case 'SEARCH_POKEMON':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export default pokemonReducer;
