const Mongoose = require('mongoose');
require('dotenv').config();

const dbMongo = process.env.DATABASE_URL;
const Db = async () => {
    await Mongoose
        .connect(dbMongo)
        .then(() => console.log("DB Funcionando"))
        .catch((error: Error) => console.error(error))
};

export default Db;