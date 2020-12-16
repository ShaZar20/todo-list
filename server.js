const Task = require('./models/task');
var cors = require('cors');
let bodyParser = require('body-parser');
const path = require('path')
const express = require('express');
const chalk = require('chalk');
require ('./DB/tasksDB');
const taskRouter = require('./routers/taskRouter');
const mongoose = require('mongoose')



const port = 4000 ;
const app = express();
app.use(cors());
app.set('trust proxy', true);
app.use(bodyParser.json({limit: '50mb', extended: true}))


app.use(bodyParser.json())
app.use('/task', taskRouter);

app.use(express.static(path.join(__dirname,'client/build')))
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})
 
app.listen(port, () => {
    console.log(chalk.green.inverse(`Server is up on port ${port}`))
})