const Express = require('express');
const Search = require('../handlers/mainSearch_handler');

const mainSearchRouter = Express.Router();
mainSearchRouter.use("/:q", Search)

export default mainSearchRouter;
