const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@burger-queen.ldx230x.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Erro ao conectar ao banco:" + error);
      }
      return console.log("Conexão com o banco estabelecida!");
    }
  );
};

module.exports = connect;
