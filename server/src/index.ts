import App from "./app";
import Db from "./db";

Db();

App.listen(3001, () => {
    console.log(`Server started at 3001`)
});