const { Sequelize } = require('sequelize')

const dataName = 'registro'
const user = 'root'
const password = ''
const host = 'localhost'

const conection = new Sequelize( dataName, user, password,{ host: host, dialect: 'mysql'})

conection.authenticate()
.then(function(){ console.log('conection')})
.catch(function(){console.log('conection fail')})

module.exports = conection