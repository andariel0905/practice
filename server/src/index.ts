const App = require('./app');
const Db = require('./db');

Db.default();

App.default.listen(3001, () => {
    console.log(`Server started at 3001`)
});