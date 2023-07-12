module.exports = () => {
    const Express = require('express');
    const Cors = require('cors');
    const Morgan = require('morgan');

    const App = Express();

    App.use(Express.json());
    App.use(Cors());
    App.use(Morgan("dev"));

    return App;
};