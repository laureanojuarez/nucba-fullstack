const productContainer = document.querySelector(".products-container");
const boton = document.getElementById("boton");

// LOCAL STORAGE
const guardarStorage = (value) => {
  localStorage.setItem("pizzaId", value);
};

const cargarStorage = () => {
  const savedPizzaId = localStorage.getItem("pizzaId");
  if (savedPizzaId) {
    document.getElementById("inputNumero").value = savedPizzaId;
  }
};

// RENDERIZAR LOS PRODUCTOS

const renderProducts = () => {
  boton.addEventListener("click", () => {
    const inputNumero = document.getElementById("inputNumero").value;

    if (!inputNumero) {
      productContainer.innerHTML = `
      Ingrese un numero
      `;
      return;
    }

    guardarStorage(inputNumero);

    const pizza = pizzas.find((e) => e.id == inputNumero);

    if (pizza) {
      productContainer.innerHTML = `
      <div class="pizza-card">
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}" alt="${pizza.nombre}">
      <p>Precio: ${pizza.precio}</p>
      </div>
      `;
    } else {
      productContainer.innerHTML = `
      ERROR: No existe una pizza con ese ID.
      `;
    }
  });
};

const init = () => {
  cargarStorage();
  renderProducts();
};

init();
