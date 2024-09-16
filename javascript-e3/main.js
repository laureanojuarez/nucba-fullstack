const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  const inputNumero = document.getElementById("inputNumero").value;
  const productContainer = document.querySelector(".products-container");

  productContainer.innerHTML = "";

  if (!inputNumero) {
    productContainer.textContent = "Ingrese un numero";
    return;
  }

  const encontrarPizza = pizzas.find((pizza) => pizza.id == inputNumero);

  if (encontrarPizza) {
    productContainer.innerHTML = `
                <h2>${encontrarPizza.nombre}</h2>
                <img src="${encontrarPizza.imagen}" alt="${encontrarPizza.nombre}">
                <p>Precio: ${encontrarPizza.precio}</p>
        `;
  } else {
    productContainer.textContent = "ERROR.";
  }
});
