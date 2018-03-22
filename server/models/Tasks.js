let mongoose = require('mongoose');

//Task Schema
let tasksSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    required: true
  }
});

let Tasks = module.exports = mongoose.model('Tasks', tasksSchema);

//Get Tasks 
module.exports.getTasks = (callback, limit)=>{
  Tasks.find(callback).limit(limit);
}

//Get Single Task
module.exports.getOneTask = (id, callback) => {
   //Create Query 
   let query = {_id:id}
	//Added 12/03/2018 - to be tested	
   Tasks.findById(query, callback);
}

//Save Task
module.exports.addTask = (task, callback) => {
  Tasks.create(task, callback);
}

//Update Task
module.exports.updateTask = (id, task, options, callback) => {
  let query = {_id:id}

  let update = {
    title: task.title,
    isDone: task.isDone
  }

  Tasks.findOneAndUpdate(query, update, options, callback );
}

//Delete Task
module.exports.deleteTask = (id, callback) =>{
  let query = {_id:id}
  Tasks.findByIdAndRemove(query, callback);
}

