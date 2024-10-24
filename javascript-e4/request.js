const requestPokemon = async (pokemonId) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error en la peticion: ${error}`);
  }
};
