import Express from 'express';
import Routes from './routes/routes_index';
const Cors = require('cors');
const Morgan = require('morgan');

const App = Express();

App.use(Express.json());
App.use(Cors());
App.use(Morgan("dev"));
App.use('/', Routes);

export default App;