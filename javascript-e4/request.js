const requestPokemon = async (pokemonId) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );

    if (!response.ok) {
      throw new Error("Pokémon no encontrado");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Hubo un error en la petición: ${error}`);
  }
};
