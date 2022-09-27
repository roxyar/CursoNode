// SE ENCARGA DE CONECTAR TODAS LAS RUTAS

const { Router } = require("express"); // importar express
//const { route } = require("./medico.routes");

const medicoRoutes = require("./medico.routes") // importar el archivo de rutas de usuarios
const pacienteRoutes = require("./paciente.routes") // importar el archivo de rutas de usuarios
const authRoutes = require("./auth.routes")
const decodeJWT =require("../middlewares/decodeJWT");
const { decode } = require("jsonwebtoken");
const rutas_init = () => { // aca se ponen todas las rutas que existen
  const router = Router() // crear una instancia de express.Router()
  router.use("/paciente",decodeJWT,pacienteRoutes)

  router.use("/medico",decodeJWT, medicoRoutes) 

  return router // retornar el router
};

const rutas_auth=()=>{
  const router =Router()
  router.use("/auth",authRoutes)
  return router
  
}

module.exports = { rutas_init ,rutas_auth} // exportar el archivo de rutas de la api