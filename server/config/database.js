const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://ProvaLivros:ProvaLivros@livros.vg3ek.gcp.mongodb.net/livros?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Conexão estabelecida com o banco de dados...");
});

mongoose.connection.on("error", (error) => {
  console.log(`Ocorreu um erro com a conexão do banco de dados. \n${error}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("O banco de dados foi desconectado...");
});

module.exports = db;