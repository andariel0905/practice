import { Router } from "express";

import mainSearchRouter from "./mainSearch_route";
import usersRouter from "./users_route";

const Routes = Router();
Routes.use("/search", mainSearchRouter);
Routes.use("/usuario", usersRouter);

export default Routes;
