const express = require('express');
const Task = require('../models/task')
const taskRouter = express.Router();


taskRouter.post("/", (req, res) => {
  console.log(req.body);
  var newTask = new Task(req.body.newTask);
  newTask.save()
  .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

taskRouter.get("/", (req,res) => {
    Task.find({isValid: "true"}, (err, result) =>{
      if(err) console.log(err);
      console.log(result);
      res.send(result);

  })});

taskRouter.put("/:id", (req,res) => {
  console.log(req.params);
  Task.findOneAndUpdate({_id: req.params.id},{isValid: false}, (err, result) =>{
    if(err) console.log(err);
    res.send(result);
  });
});



module.exports = taskRouter;