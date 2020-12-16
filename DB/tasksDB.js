const mongoose = require('mongoose')
const dbconfig = require("../config/DB.config")
const chalk = require('chalk')

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

mongoose.connect(dbconfig.uri, options)
.then( () => {
    console.log(chalk.blue("Successfuly connect to mongoDB"));
})
.catch (err => {
    console.log(chalk.red("ERROR, unsuccessfuly connect to mongoDB", err.reason));
    process.exit();
})