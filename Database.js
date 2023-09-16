const mongoose = require("mongoose")

const server = 'aclcrl5.mongodb.net'
const database = "produtoDB"
const username = "lucasvicentin2018"
const password = 'zz8qEIiCJJG2pZaD'


//mongodb+srv://lucasvicentin2018:<password>@bancodedados./
class Database {
    async _connect(){
        mongoose
        .connect(`mongodb+srv://${username}:${password}@${database}.${server}`)
        .then(() =>{
            console.log("Conectado no banco com sucesso")
        })
        .catch((error)=>{
            console.error("Erro ao conectar com o banco" + error)
        })
     }
}

module.exports = new Database()