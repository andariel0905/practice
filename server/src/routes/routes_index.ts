const {Router} = require('express');
const mainSearchRoute = require('./mainSearch_route')();
const Routes = Router();
Routes.use("/search", mainSearchRoute);

export default Routes;
