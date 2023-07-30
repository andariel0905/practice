import Express from 'express'
import Handlers from '../handlers/users_handler'

const usersRouter = Express.Router()
usersRouter.get("/all", Handlers.getUsuarios)
usersRouter.get("/", Handlers.getUsuario)
usersRouter.post("/", Handlers.postUsuario)

export default usersRouter
