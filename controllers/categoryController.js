/*
 * Este archivo se puede usar como referencia para crear el controlador de
 * cualquier entidad del sistema.
 *
 * Por ejemplo, si se necesita crear un controlador para la entidad `Student`,
 * se sugiere hacer Copy & Paste de este archivo y nombrarlo como
 * `studentController.js`.
 *
 * No es necesario renombrar los métodos. A priori, la idea es que todos los
 * controladores tengan estos 5 métodos: index, show, store, update y destroy.
 *
 */

// Display a listing of the resource.
const { Category } = require("../models/index");

async function index(req, res) {
  try {
    const resultCategory = await Category.findAll();
    return res.json(resultCategory);
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const categoryByid = await Category.findByPk(req.params.id);
    if (categoryByid) {
      res.json(categoryByid);
    } else {
      res.status(404).json({ error: "No se encontró la categoria" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const name = req.body.name;
    const newCategory = await Category.create({ name });
    return res.json(newCategory);
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const categoryUpdate = await Category.findByPk(req.params.id);
    await categoryUpdate.update({
      name: req.body.name,
    });
    res.json(categoryUpdate);
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

async function destroy(req, res) {
  try {
    await Category.destroy({ where: { id: req.params.id } });
    res.send("Se ha eliminado exitosamente");
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
