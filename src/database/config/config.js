 // importo el archivo de constantes globales
const globalConstants = require('../../const/globalConstants')

module.exports = {
 
  "development": {
    "username": "root",
    "password": "",
    "database": "nodefinal",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

