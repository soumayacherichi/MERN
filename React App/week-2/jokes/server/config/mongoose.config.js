const mongoose = require('mongoose')

module.exports = (databaseName) => {
    mongoose.connect(`mongodb://127.0.0.1/${databaseName}`)
    .then(() =>console.log(`Connection established with database ${databaseName}✅✅✅`))
    .catch(error => console.log(`Cannot connect to database ${databaseName} ❌❌❌❌`))
}