const App = require('./app')();
const Db = require('./db')();

Db();

App.listen(3001, () => {
    console.log(`Server started at 3001`)
});