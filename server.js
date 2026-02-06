const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, ".env") })

const mongoose = require("mongoose")
const app = require("./app")

console.log("CWD:", process.cwd())
console.log("__dirname:", __dirname)
console.log("Mongo URI:", process.env.MONGO_URI)

const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado ao MongoDB")
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
  })
  .catch(err => console.error("Erro ao conectar no MongoDB:", err))
