const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/taskList');
let db = mongoose.connection;

//Import Model
let TaskModel = require("../models/tasks");

//Get All Tasks
router.get("/tasks", (req, res) => {
  TaskModel.getTasks((err, tasks) => {
    if(err) {
      throw err;
    }
    res.json(tasks);    
  });
});

//Get Single Tasks
router.get("/tasks/:id", (req, res) => {
  let id = req.params.id;

  TaskModel.getOneTask(id, (err, task) => {
    if(err) {
      throw err;
    }
    res.json(task);    
  });
});

//Save Task
router.post('/tasks', (req, res) => {
  let task = req.body;

  TaskModel.addTask(task, (err, task) => {
    if(err){
      throw err;
    }
    res.json(task);
  });
});

//Update Task
router.put('/tasks/:id', (req, res) => {
  let id = req.params.id;
  let task = req.body;

  TaskModel.updateTask(id, task, {}, (err, task) => {
    if(err){
      throw err;
    }
    res.json(task);
  });
});

//Delete Task
router.delete('/tasks/:id', (req, res)=>{
  let id = req.params.id;
  
  TaskModel.deleteTask(id, (err, task)=>{
    if(err){
      throw err;
    }
    res.json(task)
  });
});

module.exports = router;
