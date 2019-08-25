const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_finance', { useNewUrlParser: true })

mongoose.Error.messages.general.require = "O atributo '{PATH}' é obritório."
mongoose.Error.messages.Number.min = "O valor: '{VALUE}' é menor que o liminito mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O valor: '{VALUE}' é maior que o liminito máximo de '{MAX}'."