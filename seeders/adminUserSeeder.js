/*
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 *
 * En este ejemplo se están insertando 100 usuarios con nombres ficticios.
 */

const faker = require("@faker-js/faker").fakerES;
const { AdminUser } = require("../models");

module.exports = async () => {
  const adminUsers = [
    {
      name: "Karina",
      lastname: "Gomez",
      email: "Gomez@gmail.com",
      address: "Caju123",
      password: "Hola123",
    },
  ];
  await AdminUser.bulkCreate(adminUsers);
  console.log("[Database] Se corrió el seeder de Users.");
};
