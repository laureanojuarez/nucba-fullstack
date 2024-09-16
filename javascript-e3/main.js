const boton = document.getElementById("boton");

const encontrarPizza = pizzas.find((pizza) => pizza.id == inputNumero);

boton.addEventListener("click", () => {
  const inputNumero = document.getElementById("inputNumero").value;
  const productContainer = document.querySelector(".products-container");
  productContainer.innerHTML = "";

  if (inputNumero === "") {
    productContainer.textContent = "Ingrese un numero";
    return;
  }

  if (encontrarPizza) {
    productContainer.innerHTML = `
            <div class="card">
                <h2>${pizza.nombre}</h2>
                <img src="${pizza.imagen}" alt="${pizza.nombre}">
                <p>Precio: ${pizza.precio}</p>
            </div>
        `;
  } else {
    productContainer.textContent = "ERROR.";
  }
});
