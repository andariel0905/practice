import Express from 'express';
import Handlers from '../handlers/mainSearch_handler';

const mainSearchRouter = Express.Router();
mainSearchRouter.get("/admin/:q", Handlers.AdminSearch);
mainSearchRouter.get("/:q", Handlers.Search);


export default mainSearchRouter;
