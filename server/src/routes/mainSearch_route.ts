import Express from 'express';
import Search from '../handlers/mainSearch_handler';

const mainSearchRouter = Express.Router();
mainSearchRouter.get("/:q", Search);

export default mainSearchRouter;
