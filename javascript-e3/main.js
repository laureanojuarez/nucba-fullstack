const productContainer = document.querySelector(".products-container");
const boton = document.getElementById("boton");

// LOCAL STORAGE
const guardarStorage = (id) => {
  localStorage.setItem("pizzaId", id);
};

const cargarStorage = () => {
  return localStorage.getItem("pizzaId");
};

// FUNCION PARA RENDERIZAR LA PIZZA
const renderPizza = (pizza) => {
  if (pizza) {
    productContainer.innerHTML = `
  <div class="pizza-card">
    <h2>${pizza.nombre}</h2>
    <img src="${pizza.imagen}" alt="${pizza.nombre}">
    <p>Precio: ${pizza.precio}</p>
  </div>
  `;
  } else {
    productContainer.innerHTML = ` ERROR: No existe una pizza con ese ID. `;
  }
};

// FUNCION PARA RENDERIZAR LOS PRODUCTOS
const renderProducts = () => {
  boton.addEventListener("click", () => {
    const inputNumero = document.getElementById("inputNumero").value;

    if (!inputNumero) {
      productContainer.innerHTML = `Ingrese un numero `;
      return;
    }

    const pizza = pizzas.find((e) => e.id == inputNumero);

    if (pizza) {
      guardarStorage(inputNumero);
      renderPizza(pizza);
    } else {
      productContainer.innerHTML = `ERROR: No existe una pizza con ese ID.`;
    }
  });
};

const init = () => {
  const pizzaGuardada = cargarStorage();
  if (pizzaGuardada) {
    const pizza = pizzas.find((e) => e.id == pizzaGuardada);
    if (pizza) {
      document.getElementById("inputNumero").value = pizzaGuardada;
      renderPizza(pizza);
    }
  }
  renderProducts();
};

init();
