import { Router } from "express";

import mainSearchRouter from "./mainSearch_route";

const Routes = Router();
Routes.use("/search", mainSearchRouter);

export default Routes;
