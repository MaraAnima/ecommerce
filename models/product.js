const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        name: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
        },
        photo: {
          type: DataTypes.STRING,
        },
        stock: {
          type: DataTypes.STRING,
        },
        highlights: {
          type: DataTypes.BOOLEAN,
        },
        price: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "product", // Nombre del modelo en singular y en minúscula en la base de datos
      },
    );
    return Product;
  }
}

module.exports = Product;
