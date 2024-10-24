const form = document.querySelector("#form");
const pokemonInput = document.querySelector(".search-input");
const cardContainer = document.querySelector("#pokemonContainer");
const searchMsg = document.querySelector(".search-msg");
const pokemonTitle = document.querySelector(".pokemon");

const getPokemonData = (pokemonData) => {
  return {
    name: pokemonData.name,
    image: pokemonData.sprites.front_default,
    types: pokemonData.types.map((typeInfo) => typeInfo.type.name).join(", "),
    height: (pokemonData.height / 10).toFixed(2),
    weight: (pokemonData.weight / 10).toFixed(2),
  };
};

const createPokemonTemplate = (pokemonData) => {
  const {name, image, types, height, weight} = getPokemonData(pokemonData);
  return `
    <div class="card">
      <img src="${image}" alt="${name}">
      <h2>${name}</h2>
      <p>Tipo: ${types}</p>
      <p>Altura: ${height} m</p>
      <p>Peso: ${weight} kg</p>
    </div>
  `;
};

const renderPokemonCard = (pokemonData) => {
  cardContainer.innerHTML = createPokemonTemplate(pokemonData);
};

const searchPokemon = async (event) => {
  event.preventDefault();
  const searchedPokemonId = pokemonInput.value.trim();

  if (!searchedPokemonId) {
    searchMsg.textContent = "Por favor, ingresa un número.";
    return;
  }

  const fetchedPokemon = await requestPokemon(searchedPokemonId);

  if (!fetchedPokemon) {
    searchMsg.textContent = `El Pokémon con ID ${searchedPokemonId} no existe.`;
    cardContainer.innerHTML = "";
    form.reset();
    return;
  }

  renderPokemonCard(fetchedPokemon);
  form.reset();
};

const init = () => {
  form.addEventListener("submit", searchPokemon);
};

init();
