const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

pizzas.forEach((e) => {
  const esImpar = e.id % 2 !== 0;
  if (esImpar) {
    console.log(`Las pizzas ${e.nombre} con id ${e.id} son impares`);
  }
});

pizzas.forEach((e) => {
  const seisciento = e.precio <= 600;
  if (seisciento) {
    console.log(
      `Las pizzas ${e.nombre} con menor precio o igual a 600 es: ${e.precio} `
    );
  }
});

pizzas.forEach((pizza) => {
  console.log(`Nombre: ${pizza.nombre}, Precio: ${pizza.precio}`);
});

// pizzas.forEach((pizza) => {
//   console.log(`Nombre: ${pizza.nombre}, Ingredientes: ${pizza.ingredientes}`);
// });

console.log("Ingredientes de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`Ingredientes de la ${pizza.nombre}:`);
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(`- ${ingrediente}`);
  });
});
